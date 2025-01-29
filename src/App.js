import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoSubmissionForm from "./components/VideoSubmissionForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoSubmissionForm />} />
          <Route path="/sr" element={<h1>Singh Roshan</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// <h1 className="">Roshan Singh</h1>
