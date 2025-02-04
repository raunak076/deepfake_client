import React from "react";

const DeepFakeNews = () => {
  // Sample news data - replace with your actual news data
  const deepfakeNews = [
    {
      id: 1,
      title:
        "AI-Generated Deep Fake Videos Raise Concerns in Political Campaign",
      image: "https://via.placeholder.com/400x200",
      summary:
        "Recent discovery of sophisticated deepfake videos targeting political candidates has raised alarm among election security experts. The videos, which show candidates making false statements, were created using advanced AI technology.",
      source: "Tech Security Times",
      date: "March 15, 2024",
      url: "https://example.com/news1",
    },
    {
      id: 2,
      title: "New Deepfake Detection Tool Unveiled by Research Team",
      image: "https://via.placeholder.com/400x200",
      summary:
        "A team of researchers has developed a new tool that can detect deepfake videos with 95% accuracy. The tool uses machine learning algorithms to analyze facial movements and lighting patterns.",
      source: "AI Research Weekly",
      date: "March 12, 2024",
      url: "https://example.com/news2",
    },
    {
      id: 3,
      title: "Celebrity Deepfake Scam Costs Followers Millions",
      summary:
        "A sophisticated deepfake scam using a famous celebrity's likeness has resulted in millions of dollars in losses. The scammers used AI-generated videos to promote fake investment schemes.",
      source: "Cyber Security News",
      date: "March 10, 2024",
      url: "https://example.com/news3",
    },
    {
      id: 4,
      title: "Global Summit Addresses Deepfake Threats to Democracy",
      image: "https://via.placeholder.com/400x200",
      summary:
        "World leaders gathered at a summit to discuss the growing threat of deepfakes to democratic processes. The meeting resulted in new international guidelines for social media platforms.",
      source: "World Politics Daily",
      date: "March 8, 2024",
      url: "https://example.com/news4",
    },
  ];

  return (
    <div className="deepfake-news-section">
      <div className="news-container">
        <div className="news-header">
          <h1>Detected Deepfakes</h1>
          <p className="subtitle">
            Recent news and discoveries about deepfake detection worldwide
          </p>
        </div>

        <div className="news-grid">
          {deepfakeNews.map((news) => (
            <article key={news.id} className="news-card">
              {news.image && (
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                </div>
              )}
              <div className="news-content">
                <h2>{news.title}</h2>
                <p className="news-summary">{news.summary}</p>
                <div className="news-metadata">
                  <span className="news-source">
                    <i className="fas fa-newspaper"></i> {news.source}
                  </span>
                  <span className="news-date">
                    <i className="far fa-calendar-alt"></i> {news.date}
                  </span>
                </div>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn">
                  Read Full Article <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeepFakeNews;
