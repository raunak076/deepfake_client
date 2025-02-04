import React, { useState, useEffect } from "react";
import "../styles/Detected.css";
import Hero from "../assets/hero.jpeg";


const DetectedDeepFake = () => {
  const images = [
    {
      id: 1,
      title: "Deepfake Detection1",
      source: "Deepfake 1",
      isReal: false,
      videoUrl: "https://example.com/video1.mp4",
      images: Array(10).fill(Hero),
    },
    {
      id: 2,
      title: "Deepfake Detection2",
      source: "Deepfake 2",
      isReal: true,
      videoUrl: "https://example.com/video2.mp4",
      images: Array(10).fill(Hero),
    },
    {
      id: 3,
      title: "Deepfake Detection3",
      source: "Deepfake 3",
      isReal: false,
      videoUrl: "https://example.com/video3.mp4",
      images: Array(10).fill(Hero),
    },
  ];

  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data] = useState(images);
  const [isModalClosing, setIsModalClosing] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (d) => {
    setSelectedData(d);
    setIsModalOpen(true);
    setIsModalClosing(false);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedData(null);
      setIsModalOpen(false);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <div className="container">
      <h1 className="title">Detected Deepfake</h1>
      
      {data.length === 0 ? (
        <h3 className="no-data">No data to display.</h3>
      ) : (
        <div className="card-grid">
          {data.map((d) => (
            <div 
              key={d.id}
              className="card"
              onClick={() => openModal(d)}
            >
              <h3 className="card-title">{d.title}</h3>
              <p className="card-source">{`By ${d.source}`}</p>
              <div className="image-grid">
                {d.images.slice(0, 5).map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image}
                      alt={`Frame ${index + 1}`}
                      className="thumbnail"
                    />
                  </div>
                ))}
              </div>
              <div className="image-grid">
                {d.images.slice(5, 10).map((image, index) => (
                  <div key={index + 5} className="image-container">
                    <img
                      src={image}
                      alt={`Frame ${index + 6}`}
                      className="thumbnail"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedData && (
        <div 
          className={`modal-overlay ${isModalClosing ? 'fade-out' : 'fade-in'}`}
          onClick={closeModal}
        >
          <div 
            className={`modal ${isModalClosing ? 'slide-out' : 'slide-in'}`}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
            
            <h2 className="modal-title">{selectedData.title}</h2>
            <p className="modal-source">{`By ${selectedData.source}`}</p>
            
            <div className="modal-content">
              <section className="modal-section">
                <h3 className="section-title">Extracted Image Frames</h3>
                <div className="gallery-grid">
                  {selectedData.images.map((image, index) => (
                    <a
                      key={`image-${index}`}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-item"
                    >
                      <img
                        src={image}
                        alt={`Frame ${index + 1}`}
                        className="gallery-image"
                      />
                      <div className="image-overlay">
                        <span className="frame-number">Frame {index + 1}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <h3 className="section-title">Extracted Lip Frames</h3>
                <div className="gallery-grid">
                  {selectedData.images.map((image, index) => (
                    <a
                      key={`lip-${index}`}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-item"
                    >
                      <img
                        src={image}
                        alt={`Lip Frame ${index + 1}`}
                        className="gallery-image"
                      />
                      <div className="image-overlay">
                        <span className="frame-number">Frame {index + 1}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetectedDeepFake;