import React, { useState, useEffect } from 'react';
import '../styles/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = "We'd love to hear from you. Send us a message!";

  useEffect(() => {
    let index = 0;
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(prev => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Show success message (you can add your own success handling)
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        {/* Left Panel - Contact Information */}
        <div className="contact-info">
          <h1 className="glow-text">Contact Us</h1>
          <p className="typing-text">{displayText}</p>

          <div className="contact-methods">
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Visit Us</h3>
                <p>123 Business Avenue</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>info@example.com</p>
                <p>support@example.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="/#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="form-input"
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="form-input"
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="form-input"
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="form-input"
                rows="5"
              ></textarea>
              <span className="focus-border"></span>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;