import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/150",
      description:
        "With over 10 years of experience in software development and team leadership.",
    },
    {
      name: "Jane Smith",
      role: "Technical Lead",
      image: "https://via.placeholder.com/150",
      description:
        "Specialized in AI and machine learning with a passion for innovative solutions.",
    },
    {
      name: "Mike Johnson",
      role: "Senior Developer",
      image: "https://via.placeholder.com/150",
      description:
        "Full-stack developer with expertise in React and Node.js ecosystems.",
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      image: "https://via.placeholder.com/150",
      description:
        "Creative designer focused on creating intuitive and engaging user experiences.",
    },
  ];

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p className="about-subtitle">
            Dedicated to Excellence in Software Development
          </p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We strive to deliver innovative software solutions that empower
            businesses and enhance user experiences. Our team combines technical
            expertise with creative problem-solving to create impactful digital
            solutions.
          </p>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                </div>
                <div className="member-social">
                  <a href="/#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="/#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/#" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>
                Constantly pushing boundaries and embracing new technologies
              </p>
            </div>
            <div className="value-item">
              <i className="fas fa-users"></i>
              <h3>Collaboration</h3>
              <p>Working together to achieve exceptional results</p>
            </div>
            <div className="value-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Quality</h3>
              <p>Maintaining high standards in everything we do</p>
            </div>
            <div className="value-item">
              <i className="fas fa-heart"></i>
              <h3>Passion</h3>
              <p>Loving what we do and putting our heart into our work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
