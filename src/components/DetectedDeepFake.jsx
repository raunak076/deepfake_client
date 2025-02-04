import React, { useState } from "react";
import Close from "../assets/close.png";
import Hero from "../assets/hero.jpeg";

const DetectedDeepFake = () => {
  const images = [
    {
      id: 1,
      title: "Deepfake Detection1",
      source: "Deepfake 1",
      isReal: false,
      videoUrl: "https://example.com/video1.mp4",
      images: [Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero],
    },
    {
      id: 2,
      title: "Deepfake Detection2",
      source: "Deepfake 2",
      isReal: true,
      videoUrl: "https://example.com/video2.mp4",
      images: [Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero],
    },
    {
      id: 3,
      title: "Deepfake Detection3",
      source: "Deepfake 3",
      isReal: false,
      videoUrl: "https://example.com/video3.mp4",
      images: [Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero, Hero],
    },
  ];
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data] = useState(images);

  const openModal = (d) => {
    setSelectedData(d);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };
  // setData(images);
  return (
    <div className="app">
      <h1>Detected Deepfake</h1>
      {data.length === 0 ? (
        <>
          <h3 style={{ color: "gray" }}>No data to display.</h3>
        </>
      ) : (
        <>
          <div className="container">
            {data.map((d) => (
              <div
                key={d.id}
                className="card"
                onClick={() => openModal(d)}
                style={{ backgroundColor: "white" }}>
                <h3 className="name">{d.title}</h3>
                <p className="handle">{`By ${d.source}`}</p>
                <div className="imageStack">
                  {d?.images?.map((image, index) => (
                    <div key={index} className="stackedImage">
                      <img src={`${image}`} alt={image} className="thumbnail" />
                    </div>
                  ))}
                </div>
                <div className="imageStack">
                  {d?.images?.map((image, index) => (
                    <div key={index} className="stackedImage">
                      <img src={`${image}`} alt={image} className="thumbnail" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && selectedData && (
            <div className="overlay">
              <div className="modal-container">
                <div className="modal">
                  <button className="closeButton" onClick={closeModal}>
                    <img src={Close} alt="Close" />
                  </button>
                  <h2>{selectedData.title}</h2>
                  <p>{`By ${selectedData.source}`}</p>
                  <div className="imageGallery">
                    <div className="gallery-section">
                      <h3>Extracted Image Frames</h3>
                      <div className="gallery-grid">
                        {selectedData?.images?.map((image, index) => (
                          <a
                            key={`image-${index}`}
                            href={`${image}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gallery-item">
                            <img
                              src={`${image}`}
                              alt={`Frame ${index + 1}`}
                              className="fullImage"
                            />
                            <div className="image-overlay">
                              <span>Frame {index + 1}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="gallery-section">
                      <h3>Extracted Lip Frames</h3>
                      <div className="gallery-grid">
                        {selectedData?.images?.map((image, index) => (
                          <a
                            key={`lip-${index}`}
                            href={`${image}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gallery-item">
                            <img
                              src={`${image}`}
                              alt={`Lip Frame ${index + 1}`}
                              className="fullImage"
                            />
                            <div className="image-overlay">
                              <span>Frame {index + 1}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetectedDeepFake;
