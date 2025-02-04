import React, { useState, useEffect } from "react";
import "../styles/DeepFakeNews.css";

const DeepFakeNews = () => {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [isVisible, setIsVisible] = useState({});
  
  const fullTitle = " Detected Deepfakes  ";
  const fullSubtitle = " Recent news and discoveries about deepfake detection worldwide ";

  // Typing animation effect
  useEffect(() => {
    let currentTitleIndex = 0;
    let currentSubtitleIndex = 0;

    const typeTitle = setInterval(() => {
      if (currentTitleIndex < fullTitle.length-1) {
        setTitleText(prev => prev + fullTitle[currentTitleIndex]);
        currentTitleIndex++;
      } else {
        clearInterval(typeTitle);
        
        const typeSubtitle = setInterval(() => {
          if (currentSubtitleIndex < fullSubtitle.length-1) {
            setSubtitleText(prev => prev + fullSubtitle[currentSubtitleIndex]);
            currentSubtitleIndex++;
          } else {
            clearInterval(typeSubtitle);
          }
        }, 30);
      }
    }, 50);

    return () => clearInterval(typeTitle);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.news-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const deepfakeNews = [
    {
      id: 1,
      title: "AI-Generated Deep Fake Videos Raise Concerns in Political Campaign",
      image: "/api/placeholder/400/200",
      summary: "Recent discovery of sophisticated deepfake videos targeting political candidates has raised alarm among election security experts. The videos, which show candidates making false statements, were created using advanced AI technology.",
      source: "Tech Security Times",
      date: "March 15, 2024",
      url: "https://example.com/news1",
    },
    {
      id: 2,
      title: "New Deepfake Detection Tool Unveiled by Research Team",
      image: "/api/placeholder/400/200",
      summary: "A team of researchers has developed a new tool that can detect deepfake videos with 95% accuracy. The tool uses machine learning algorithms to analyze facial movements and lighting patterns.",
      source: "AI Research Weekly",
      date: "March 12, 2024",
      url: "https://example.com/news2",
    },
    {
      id: 3,
      title: "Celebrity Deepfake Scam Costs Followers Millions",
      image: "/api/placeholder/400/200",
      summary: "A sophisticated deepfake scam using a famous celebrity's likeness has resulted in millions of dollars in losses. The scammers used AI-generated videos to promote fake investment schemes.",
      source: "Cyber Security News",
      date: "March 10, 2024",
      url: "https://example.com/news3",
    },
    {
      id: 4,
      title: "Global Summit Addresses Deepfake Threats to Democracy",
      image: "/api/placeholder/400/200",
      summary: "World leaders gathered at a summit to discuss the growing threat of deepfakes to democratic processes. The meeting resulted in new international guidelines for social media platforms.",
      source: "World Politics Daily",
      date: "March 8, 2024",
      url: "https://example.com/news4",
    },
  ];

  return (
    <div className="deepfake-news-section">
      <div className="background-effects">
        <div className="gradient-overlay"></div>
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>

      <div className="news-container">
        <div className="news-header">
          <h1>
            {titleText}<span className="cursor">|</span>
          </h1>
          <p className="subtitle">
            {subtitleText}
            {subtitleText.length < fullSubtitle.length && <span className="cursor">|</span>}
          </p>
        </div>

        <div className="news-grid">
          {deepfakeNews.map((news, index) => (
            <article 
              key={news.id} 
              className={`news-card ${isVisible[news.id] ? 'visible' : ''}`}
              data-id={news.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="parallax-container">
                {news.image && (
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                    <div className="image-overlay"></div>
                  </div>
                )}
                <div className="news-content">
                  <h2>{news.title}</h2>
                  <p className="news-summary">{news.summary}</p>
                  <div className="news-metadata">
                    <span className="news-source">
                      📰 {news.source}
                    </span>
                    <span className="news-date">
                      📅 {news.date}
                    </span>
                  </div>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeepFakeNews;