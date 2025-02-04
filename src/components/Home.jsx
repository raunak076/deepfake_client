import React from "react";
import hero from "../assets/hero.jpeg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${hero})`,
        }}>
        <div className="hero-content">
          <h1>Advanced Deepfake Detection System</h1>
          <p>
            Identifying synthetic media through multimodal analysis of
            audiovisual synchronization and biological signals
          </p>
          <li className="navbar-cta">
            <Link href="href" to="/detect" className="cta-button">
              Get Started
            </Link>
          </li>
        </div>
      </section>

      {/* Deepfake Explanation Section */}
      <section className="content-section dark-bg">
        <div className="section-container">
          <h2>Understanding Digital Forgery</h2>
          <div className="grid-2">
            <div className="card">
              <svg className="icon-large" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5h4v2h-4zm2.5-7.5c-.83 0-1.5.67-1.5 1.5h2c0-.83-.67-1.5-1.5-1.5zm0-4c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3s3 1.34 3 3h2c0-2.76-2.24-5-5-5z" />
              </svg>
              <h3>The Growing Threat</h3>
              <p>
                Modern deepfakes leverage generative adversarial networks (GANs)
                capable of producing hyper-realistic synthetic media at scale.
                These sophisticated forgeries can manipulate facial expressions,
                lip movements, and vocal patterns with sub-millisecond
                precision.
              </p>
            </div>

            <div className="card">
              <svg className="icon-large" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
              </svg>
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

      {/* Technology Section */}
      <section className="content-section">
        <div className="section-container">
          <h2>Detection Methodology</h2>
          <div className="grid-3">
            <div className="tech-card">
              <div
                className="icon-container"
                style={{ backgroundColor: "gray" }}>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-8.5h7v2h-7z" />
                </svg>
              </div>
              <h4>Lip Sync Analysis</h4>
              <p>
                Computer vision system tracking 42 facial landmarks with 5ms
                temporal resolution. Phoneme-viseme mapping detects
                synchronization anomalies beyond human perception thresholds.
              </p>
            </div>

            <div className="tech-card">
              <div
                className="icon-container"
                style={{ backgroundColor: "gray" }}>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h4>Audio-Visual Correlation</h4>
              <p>
                Multiband spectral analysis identifying phase discrepancies
                between vocal harmonics and facial micro-movements. Detects
                synthetic voice artifacts and resonance mismatches.
              </p>
            </div>

            <div className="tech-card">
              <div
                className="icon-container"
                style={{ backgroundColor: "gray" }}>
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4h-4v4H7V7h2v4h4V7h2v10z" />
                </svg>
              </div>
              <h4>Neural Artifact Detection</h4>
              <p>
                3D convolutional networks analyzing spatial-temporal features
                across 128-frame sequences. Identifies residual generator
                patterns in synthesized media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98.7%</div>
              <div className="stat-label">Detection Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.4M+</div>
              <div className="stat-label">Training Samples</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5ms</div>
              <div className="stat-label">Temporal Resolution</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">128</div>
              <div className="stat-label">Analysis Frames</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
