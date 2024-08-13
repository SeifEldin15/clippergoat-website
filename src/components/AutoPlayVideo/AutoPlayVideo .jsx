import React, { useRef, useState, useEffect } from "react";

const AutoPlayVideo = ({ sources, className, poster = "" }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Lowered threshold for hero videos
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={`${className} ${isLoaded ? "loaded" : "blurred"}`}
      onLoadedData={handleVideoLoad}
      loop
      muted
      playsInline
    >
      {sources.map((source, index) => (
        <source key={index} src={source.src} media={source.media} type="video/mp4" />
      ))}
      <track kind="captions" srclang="en" label="English captions" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoPlayVideo;