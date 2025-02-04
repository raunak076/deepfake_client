import axios from "axios";
import React, { useState, useRef } from "react";

const VideoSubmissionForm = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const MAX_VIDEO_LENGTH = 60; // Maximum video length in seconds
  const MAX_FILE_SIZE_MB = 10; // Maximum file size in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleVideoChange = (event) => {
    setError("");
    const file = event.target.files[0];

    if (!file) return;

    // Validate file size
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(`File size exceeds the limit of ${MAX_FILE_SIZE_MB} MB.`);
      return;
    }

    // Validate video duration
    const videoElement = document.createElement("video");
    videoElement.src = URL.createObjectURL(file);

    videoElement.onloadedmetadata = () => {
      if (videoElement.duration > MAX_VIDEO_LENGTH) {
        setError(
          `Video exceeds the maximum length of ${MAX_VIDEO_LENGTH} seconds.`
        );
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
      //   window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to submit the form.");
    }
    setVideoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
    // Submit the video file to the server or processing pipeline
    // console.log("Video submitted:", videoFile);
    // alert("Video submitted successfully!");
  };

  return (
    // <div
    //   className="video-submission-container"
    //   style={{
    //     backgroundImage:
    //       "url('https://tse2.mm.bing.net/th?id=OIP.OCq4qZF7foUZfIKJDglCzQHaE7&pid=Api')",
    //   }}>
    //   {/* <div className="video-submission-form">
    //     <h2 className="form-title">Upload Your Video</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label htmlFor="video" className="form-label">
    //           Upload Video (Max 1 Minute, 10MB)
    //         </label>
    //         <input
    //           type="file"
    //           id="video"
    //           accept="video/*"
    //           onChange={handleVideoChange}
    //           className="file-input"
    //         />
    //       </div>

    //       {error && <p className="error-message">{error}</p>}

    //       <button type="submit" className="submit-button" disabled={!videoFile}>
    //         Submit Video
    //       </button>
    //     </form>
    //   </div> */}
    //   <div className="video-submission-form">
    //     <h2 className="form-title">Upload Your Video</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label htmlFor="video" className="form-label">
    //           Upload Video (Max 1 Minute, 10MB)
    //         </label>
    //         <div className="file-input-wrapper">
    //           <button
    //             type="button"
    //             className="custom-file-button"
    //             onClick={() => document.getElementById("video").click()}>
    //             Choose File
    //           </button>
    //           <span className="file-name">
    //             {videoFile?.name || "No file chosen"}
    //           </span>
    //           <input
    //             type="file"
    //             id="video"
    //             accept="video/*"
    //             onChange={handleVideoChange}
    //             className="file-input"
    //             ref={fileInputRef}
    //           />
    //         </div>
    //       </div>

    //       {error && <p className="error-message">{error}</p>}

    //       <button type="submit" className="submit-button" disabled={!videoFile}>
    //         Submit Video
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div
      className="video-submission-container"
      style={{
        backgroundImage:
          "url('https://tse2.mm.bing.net/th?id=OIP.OCq4qZF7foUZfIKJDglCzQHaE7&pid=Api')",
      }}>
      {/* <div className="video-submission-form">
        <h2 className="form-title">Upload Your Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="video" className="form-label">
              Upload Video (Max 1 Minute, 10MB)
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleVideoChange}
              className="file-input"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button" disabled={!videoFile}>
            Submit Video
          </button>
        </form>
      </div> */}
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
