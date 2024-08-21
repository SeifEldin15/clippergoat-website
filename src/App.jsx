import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Privacy from "./Pages/InfoPages/Privacy";
import Terms from "./Pages/InfoPages/Terms";
import Refund from "./Pages/InfoPages/Refund";
import Leaderboard from "./Pages/LeaderBoard/LeaderBoard";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Careers from "./Pages/Careers/Careers";

// import FontAwesome from "./components/FontAwesome/FontAwesome";
import StarBackground from "./assets/star.mp4";


function App() {
  return (
    <>
    <div className="custogsgweew"></div>
    {/* <FontAwesome /> */}
      <div className="video-container">
        <video playsInline autoPlay muted loop className="background-video">
          <source src={StarBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Careers" element={<Careers />} />

        {/* <Route path="/Pricing" element={<Pricing />} /> */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;
