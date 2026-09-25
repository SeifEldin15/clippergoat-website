import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async () => {
      // Find all images and videos
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));

      // If we want to ensure lazy loaded images also load, remove loading="lazy"
      images.forEach(img => {
        if (img.getAttribute('loading') === 'lazy') {
          img.setAttribute('loading', 'eager');
        }
      });
      videos.forEach(video => {
         video.setAttribute('preload', 'auto');
         // Attempt to load the video explicitly if it's paused and has no poster
         if (video.readyState === 0) {
           video.load();
         }
      });

      const imagePromises = images.map(img => {
        return new Promise((resolve) => {
          if (img.complete) return resolve();
          img.onload = resolve;
          img.onerror = resolve; // Resolve on error so we don't get stuck
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
      
      // Wait an extra moment to ensure rendering is settled
      setTimeout(() => setLoading(false), 300);
    };

    // Need to wait for DOM to be populated
    setTimeout(handleLoad, 300);
  }, []);

  return (
    <>
      <div className={`preloader-overlay ${!loading ? 'hidden' : ''}`}>
        <div className="spinner"></div>
      </div>
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease-in-out', visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

export default Preloader;
