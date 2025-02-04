import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css';  // We'll define this CSS below

const Home = () => {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const fullText = "Advanced Deepfake Detection System ";
  const fullSubText = " Identifying synthetic media through multimodal analysis of audiovisual synchronization and biological signals ";
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    let currentIndex = 0;
    let currentSubIndex = 0;

    const typeMainText = setInterval(() => {
      if (currentIndex < fullText.length-1) {
        setText(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typeMainText);
        
        const typeSubText = setInterval(() => {
          if (currentSubIndex < fullSubText.length-1) {
            setSubText(prev => prev + fullSubText[currentSubIndex]);
            currentSubIndex++;
          } else {
            clearInterval(typeSubText);
          }
        }, 30);
      }
    }, 50);

    return () => clearInterval(typeMainText);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="app">
      <section className="hero">
        <div className="background-effects">
          <div className="gradient-overlay"></div>
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="title">
            {text}<span className="cursor">|</span>
          </h1>
          <p className="subtitle">
            {subText}
            {subText.length < fullSubText.length && <span className="cursor">|</span>}
          </p>
          <Link to="/detect" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      <section id="forgery" className={`content-section animate-on-scroll ${isVisible.forgery ? 'visible' : ''}`}>
        <div className="section-container">
          <h2>Understanding Digital Forgery</h2>
          <div className="grid-two">
            <div className="card">
              <h3>The Growing Threat</h3>
              <p>
                Modern deepfakes leverage generative adversarial networks (GANs) capable of producing hyper-realistic synthetic media at scale. These sophisticated forgeries can manipulate facial expressions, lip movements, and vocal patterns with sub-millisecond precision.
              </p>
            </div>
            <div className="card">
              <h3>Detection Challenges</h3>
              <p>Current generation deepfakes exhibit:</p>
              <ul>
                <li>Photorealistic facial rendering</li>
                <li>Accurate voice cloning</li>
                <li>Real-time generation capabilities</li>
                <li>Adaptive adversarial training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className={`content-section animate-on-scroll ${isVisible.technology ? 'visible' : ''}`}>
        <div className="section-container">
          <h2>Detection Methodology</h2>
          <div className="grid-three">
            {[
              {
                title: "Lip Sync Analysis",
                content: "Computer vision system tracking 42 facial landmarks with 5ms temporal resolution. Phoneme-viseme mapping detects synchronization anomalies beyond human perception thresholds."
              },
              {
                title: "Audio-Visual Correlation",
                content: "Multiband spectral analysis identifying phase discrepancies between vocal harmonics and facial micro-movements. Detects synthetic voice artifacts and resonance mismatches."
              },
              {
                title: "Neural Artifact Detection",
                content: "3D convolutional networks analyzing spatial-temporal features across 128-frame sequences. Identifies residual generator patterns in synthesized media."
              }
            ].map((item, index) => (
              <div key={index} className="tech-card">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className={`content-section animate-on-scroll ${isVisible.stats ? 'visible' : ''}`}>
        <div className="section-container">
          <div className="stats-grid">
            {[
              { value: "98.7%", label: "Detection Accuracy" },
              { value: "2.4M+", label: "Training Samples" },
              { value: "5ms", label: "Temporal Resolution" },
              { value: "128", label: "Analysis Frames" }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;