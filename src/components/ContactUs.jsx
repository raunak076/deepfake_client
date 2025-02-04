import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Info Panel */}
          <div className="contact-info-panel">
            <h2>Get in Touch</h2>
            <p className="contact-description">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            <div className="info-items">
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>support@example.com</p>
                  <p>info@example.com</p>
                  <p>help@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 234-5678</p>
                  <p>+1 (555) 345-6789</p>
                  <p>+1 (555) 456-7890</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>123 Business Street, New York, NY 10001, USA</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="/#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h2>Send us a Message</h2>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="form-input form-textarea"
                  rows="5"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
