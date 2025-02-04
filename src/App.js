import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoSubmissionForm from "./components/VideoSubmissionForm";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import DeepFakeNews from "./components/DeepFakeNews";
import DetectedDeepFake from "./components/DetectedDeepFake";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<VideoSubmissionForm />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/deepfake-news" element={<DeepFakeNews />} />
            <Route path="/detected-deepfakes" element={<DetectedDeepFake />} />
          </Routes>
        </div>
        <footer className="footer">
          <div className="section-container">
            <p>© 2023 DeepSentinel Technologies - Protecting Digital Reality</p>
            <p>
              Ethical AI Development | Media Integrity Standards | Cybersecurity
              Research
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;

// <h1 className="">Roshan Singh</h1>
