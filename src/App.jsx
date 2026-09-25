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
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async () => {
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));

      images.forEach(img => {
        if (img.getAttribute('loading') === 'lazy') {
          img.setAttribute('loading', 'eager');
        }
      });
      videos.forEach(video => {
         video.setAttribute('preload', 'auto');
         if (video.readyState === 0) {
           video.load();
         }
      });

      const imagePromises = images.map(img => {
        return new Promise((resolve) => {
          if (img.complete) return resolve();
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      const videoPromises = videos.map(video => {
        return new Promise((resolve) => {
          if (video.readyState >= 3) return resolve();
          
          const onData = () => {
             resolve();
             video.removeEventListener('canplaythrough', onData);
             video.removeEventListener('loadeddata', onData);
             video.removeEventListener('error', onData);
          };

          video.addEventListener('canplaythrough', onData);
          video.addEventListener('loadeddata', onData);
          video.addEventListener('error', onData);
        });
      });

      await Promise.all([...imagePromises, ...videoPromises]);
      
      setTimeout(() => setLoading(false), 300);
    };

    setTimeout(handleLoad, 300);
  }, []);

  return (
    <>
    {loading && (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999999 }}>
        <LoadingScreen />
      </div>
    )}
    <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease-in-out', visibility: loading ? 'hidden' : 'visible' }}>
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
    </div>
    </>
  );
}

export default App;
