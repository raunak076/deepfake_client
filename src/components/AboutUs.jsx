import React, { useState, useEffect } from 'react';
import "../styles/AboutPage.css"


const AboutPage = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Dedicated to Excellence in Software Development";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/150",
      description: "10+ years of experience in software development and team leadership.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "https://via.placeholder.com/150",
      description: "Specialized in AI and machine learning with a passion for innovation.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mike Johnson",
      role: "Senior Developer",
      image: "https://via.placeholder.com/150",
      description: "Full-stack developer with expertise in React and Node.js ecosystems.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      image: "https://via.placeholder.com/150",
      description: "Creative designer focused on creating intuitive user experiences.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const values = [
    {
      icon: "lightbulb",
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions"
    },
    {
      icon: "users",
      title: "Collaboration",
      description: "Working together to achieve exceptional results"
    },
    {
      icon: "shield-alt",
      title: "Quality",
      description: "Maintaining high standards in everything we do"
    },
    {
      icon: "heart",
      title: "Passion",
      description: "Loving what we do and putting our heart into work"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="glow-text">About Us</h1>
        <p className="typing-text">{displayText}</p>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title glow-text">Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                We strive to deliver innovative software solutions that empower businesses 
                and enhance user experiences. Our team combines technical expertise with 
                creative problem-solving to create impactful digital solutions.
              </p>
              <p>
                Through continuous learning and adaptation, we stay at the forefront of 
                technology to provide our clients with the best possible solutions for 
                their unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title glow-text">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title glow-text">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                  <div className="member-socials">
                    {Object.keys(member.socials).map((platform) => (
                      <a 
                        href={member.socials[platform]} 
                        key={platform}
                        className="social-link"
                        aria-label={platform}
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="achievement-section">
        <div className="container">
          <h2 className="section-title glow-text">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="counter">100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h3 className="counter">50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="counter">10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="counter">25+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;