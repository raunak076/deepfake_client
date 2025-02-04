import React, { useState, useRef } from "react";
import axios from "axios";

const VideoSubmissionForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const MAX_VIDEO_LENGTH = 60;
  const MAX_FILE_SIZE_MB = 10;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleVideoChange = (event) => {
    setError("");
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size exceeds the limit of ${MAX_FILE_SIZE_MB} MB.`);
      return;
    }

    const videoElement = document.createElement("video");
    videoElement.src = URL.createObjectURL(file);

    videoElement.onloadedmetadata = () => {
      if (videoElement.duration > MAX_VIDEO_LENGTH) {
        setError(`Video exceeds the maximum length of ${MAX_VIDEO_LENGTH} seconds.`);
        setVideoFile(null);
      } else {
        setVideoFile(file);
      }
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!videoFile) {
      setError("Please upload a valid video file.");
      return;
    }
    const data = new FormData();
    data.append("video", videoFile);
    try {
      const response = await axios.post("http://127.0.0.1:5000/submit", data);
      if (response.status === 200) {
        console.log(response);
        alert(response?.data?.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form.");
    }
    setVideoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="video-submission-container">
      <style>{`
        .video-submission-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000000;
          padding: 2rem;
          font-family: 'Courier New', monospace;
        }

        .video-submission-form {
          background: rgba(20, 20, 20, 0.95);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3),
                      0 0 60px rgba(0, 255, 255, 0.1);
          max-width: 500px;
          width: 100%;
          animation: formAppear 0.5s ease-out;
        }

        @keyframes formAppear {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-title {
          color: #00fff2;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          text-shadow: 0 0 10px rgba(0, 255, 242, 0.5);
          animation: typing 3.5s steps(40, end);
          white-space: nowrap;
          overflow: hidden;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          color: #00fff2;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          text-shadow: 0 0 5px rgba(0, 255, 242, 0.3);
        }

        .file-input-wrapper {
          position: relative;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .custom-file-button {
          background: transparent;
          color: #00fff2;
          border: 2px solid #00fff2;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 5px;
          font-family: 'Courier New', monospace;
        }

        .custom-file-button:hover {
          background: rgba(0, 255, 242, 0.1);
          box-shadow: 0 0 15px rgba(0, 255, 242, 0.5);
        }

        .file-name {
          color: #ffffff;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .file-input {
          display: none;
        }

        .error-message {
          color: #ff4444;
          margin-top: 0.5rem;
          text-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
          animation: errorShake 0.5s ease-in-out;
        }

        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .submit-button {
          width: 100%;
          padding: 0.8rem;
          background: transparent;
          color: #00fff2;
          border: 2px solid #00fff2;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
          margin-top: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          background: rgba(0, 255, 242, 0.1);
          box-shadow: 0 0 20px rgba(0, 255, 242, 0.5);
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          border-color: #666;
          color: #666;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 20px rgba(0, 255, 242, 0.3); }
          50% { box-shadow: 0 0 30px rgba(0, 255, 242, 0.5); }
          100% { box-shadow: 0 0 20px rgba(0, 255, 242, 0.3); }
        }
      `}</style>

      <div className="video-submission-form">
        <h2 className="form-title">Upload Your Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="video" className="form-label">
              Upload Video (Max 1 Minute, 10MB)
            </label>
            <div className="file-input-wrapper">
              <button
                type="button"
                className="custom-file-button"
                onClick={() => document.getElementById("video").click()}>
                Choose File
              </button>
              <span className="file-name">
                {videoFile?.name || "No file chosen"}
              </span>
              <input
                type="file"
                id="video"
                accept="video/*"
                onChange={handleVideoChange}
                className="file-input"
                ref={fileInputRef}
              />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button" disabled={!videoFile}>
            Submit Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoSubmissionForm;