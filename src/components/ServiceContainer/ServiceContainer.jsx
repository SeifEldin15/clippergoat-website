import React, { useRef, useEffect, useState } from 'react';
import StartClippingBtn from "../StartClippingBtn/StartClippingBtn";
import ServiceProgress from "../ServiceProgress/ServiceProgress";
import "./ServiceContainer.css";

// Import video assets
import cleanvid from "../../assets/videos/clean.mov";
import ripvid from "../../assets/videos/rip finished edit.mov";
import repost from "../../assets/videos/post CG lp.mov";
import repeatvid from "../../assets/videos/Repeat fin CG.mov";
import rinsephone from "../../assets/videos/rinse 640 x 480.mov";
import ripvidphone from "../../assets/videos/rip  640 x 480.mov";
import repostphone from "../../assets/videos/post CG lp.mov";
import repeatvidphone from "../../assets/videos/repeat  640 x 480.mov";
import rinsesmall from "../../assets/videos/rinse 320 x 650.mov";
import ripvidsmall from "../../assets/videos/rip 320 x 650.mov";
import repostsmall from "../../assets/videos/post 320 x 650 size.mov";
import repeatvidsmall from "../../assets/videos/320 x 650 repeat.mov";

const ServiceContainer = () => {
    const targetRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [videoSources, setVideoSources] = useState({
        rip: ripvidphone,
        rinse: rinsephone,
        repost: repostphone,
        repeat: repeatvidphone,
    });

    useEffect(() => {
        if (targetRef.current) {
            setHeight(targetRef.current.getBoundingClientRect().height);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const newVideoSources = {
                rip: window.innerWidth < 500 ? ripvidsmall : (window.innerWidth < 1000 ? ripvidphone : ripvid),
                rinse: window.innerWidth < 500 ? rinsesmall : (window.innerWidth < 1000 ? rinsephone : cleanvid),
                repost: window.innerWidth < 500 ? repostsmall : (window.innerWidth < 1000 ? repostphone : repost),
                repeat: window.innerWidth < 500 ? repeatvidsmall : (window.innerWidth < 1000 ? repeatvidphone : repeatvid),
            };
            setVideoSources(newVideoSources);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set the initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const homeItems = [
        {
            icon: <i className="fa-regular fa-video-arrow-down-left service-i"></i>,
            title: "Rip",
            description:
                "Easily download your old content from any social media platform. Whether it's Instagram, TikTok, YouTube, or Facebook, our system allows you to retrieve your previous viral hits with just a few clicks.",
            videoSrc: videoSources.rip,
            className: "text-rip-color",
        },
        {
            icon: <i className="fa-regular fa-hand-sparkles service-i"></i>,
            title: "Rinse",
            description:
                "Clear all metadata and refresh your videos using our Meta Magic cleaner and video editor AI. This step ensures your content is treated as new by social media algorithms, increasing its chances of going viral again.",
            videoSrc: videoSources.rinse,
            className: "text-clean-color",
        },
        {
            icon: <i className="fa-regular fa-paper-plane service-i"></i>,
            title: "Repost",
            description:
                "Repeat the process to keep your content evergreen. Continue to rip, rinse, and repost to maintain a constant presence and engagement on social media.",
            videoSrc: videoSources.repost,
            className: "text-repost-color",
        },
        {
            icon: <i className="fa-regular fa-repeat service-i"></i>,
            title: "Repeat",
            description:
                "Utilize the TTYM method to repost your content across top platforms: TikTok, Twitter, YouTube Shorts, and Meta. This multi-platform approach boosts your reach and engagement.",
            videoSrc: videoSources.repeat,
            className: "text-repeat-color",
        },
    ];
    const [isLoaded, setIsLoaded] = useState(false);

    const handleVideoLoad = () => {
      setIsLoaded(true);
    };
    return (
        <div
            className="information-container Container-Spacing"
            id="features-section"
            ref={targetRef}
        >
            <div className='ServiceProgressContainer'>
                <ServiceProgress targetRef={targetRef} height={height} />
            </div>
            <div className="information-content-container">
                <div className="information-container-header-div ">
                    <h1 className="information-container-header custom-header-title ">
                        <span className="serivces-section">
                            Revitalize Your Content
                        </span>
                        <span className="glow-text serivces-section">
                            {" "}<br/>
                            Rip, Rinse,  Repost, Repeat!
                        </span>
                    </h1>
                    <p className="custom-header-subtitle ">
                        Transform your viral content and dominate social media platforms
                        effortlessly.
                    </p>
                </div>
                {homeItems.map((item, index) => (
                    <div className="Home-Services-Container " key={index}>
                        <div className="Home-Services-Container-Header ">
                            <div className="Home-Services-Container-Header-Content">
                                <span className="glow-text">{item.icon}</span>
                                <p className="Home-Services-Container-Header-First">{item.title}</p>
                                <p className="Home-Services-Container-Header-Second">
                                    {item.description}
                                </p>
                            </div>
                            <div className="getofferlarge">
                            <StartClippingBtn
      text="Start Reviving Clips Now!" 
      to="/reviving-clips" 
    />
                            </div>
                        </div>
                        <div className="video-box-container ">
                            <div className="video-box">
                                <video
                                    className={` ${isLoaded ? "" : "blurred"}`}
                                    loading="lazy"
                                    src={item.videoSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <track
                                        kind="captions"
                                        srclang="en"
                                        label="English captions"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="getoffersmall">
                        <StartClippingBtn
      text="Start Reviving Clips Now!" 
      to="/reviving-clips" 
    />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceContainer;
