import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSectionLanding from "../../components/HeroSectionLanding/HeroSectionLanding";
import PricingSection from "../../components/PricingSection/PricingSection";
import LogoSlideshow from "../../components/LogoSlideshow/LogoSlideshow";
import BackToTopPhone from "../../components/BackToTopPhone/BackToTopPhone";
import ServiceContainer from "../../components/ServiceContainer/ServiceContainer";
import FAQ from "../../components/FAQ/FAQ";
import Slider from "../../components/Slider/Slider";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Slideshow from "../../components/Slideshow/Slideshow";
import Adin from "https://assets.clippergoat.com/assets/Adin Ross.webp";
import Andrew from "https://assets.clippergoat.com/assets/Andrew Tate.webp";
import drake from "https://assets.clippergoat.com/assets/drake .mp4";
import bradly from "https://assets.clippergoat.com/assets/bradly Martin .webp";
import Fresh from "https://assets.clippergoat.com/assets/Fresh.webp";
import HUAK from "https://assets.clippergoat.com/assets/HUAK THUA.mp4";
import Ishowspeed from "https://assets.clippergoat.com/assets/Ishowspeed.mp4";
import KaiCent from "https://assets.clippergoat.com/assets/KaiCent.webp";
import Miami from "https://assets.clippergoat.com/assets/Miami Swim week.mp4";
import Neon from "https://assets.clippergoat.com/assets/Neon.mp4";
import Beast from "https://assets.clippergoat.com/assets/Mr Beast.webp";
import Brunson from "https://assets.clippergoat.com/assets/Russel Brunson.webp";
import imgs1 from "https://assets.clippergoat.com/assets/Alex Hormozi.webp";
import imgs2 from "https://assets.clippergoat.com/assets/Donald Trump .webp";
import imgs3 from "https://assets.clippergoat.com/assets/joe Rogan.mp4";
import imgs3224 from "https://assets.clippergoat.com/assets/Jack Doherty .webp";
import imgs5 from "https://assets.clippergoat.com/assets/Elon Musk.webp";
import imgs6 from "https://assets.clippergoat.com/assets/myron Gains.mp4";
import imgs7 from "https://assets.clippergoat.com/assets/Nija.webp";
import imgs8 from "https://assets.clippergoat.com/assets/Sophie Rain.mp4";
import imgs9 from "https://assets.clippergoat.com/assets/Stevewilldoit.mp4";
import imgs10 from "https://assets.clippergoat.com/assets/Suga Sean Omalley.webp";
import imgs11 from "https://assets.clippergoat.com/assets/XQC.mp4";
import imgs12 from "https://assets.clippergoat.com/assets/Yodit Yemane .webp";
import SlideshowTop from "../../components/SlideshowTop/SlideshowTop";
import Footer from "../../components/Footer/Footer";
import herovideo from "https://clipper-goat-ten.vercel.app/Updated final.mp4";
import herovideophone from "https://clipper-goat-ten.vercel.app/9;16 hero.mp4";

import "./Home.css";

const Home = () => {
  const INFLUENCERS = [
    {
      src: Beast,
      title: "@MrBeast",
      description:
        "Gained popularity through high-budget, philanthropic, and viral YouTube videos.",
    },
    {
      src: Brunson,

      title: "@Russell Brunson",
      description:
        "Used social media to share marketing strategies, building a large online community.",
    },
    {
      src: Ishowspeed,

      title: "@IShowSpeed",
      description:
        "Built influence through energetic and humorous gaming content on YouTube and Twitch.",
    },
    {
      src: Fresh,
      title: "@FreshPrinceCeo",
      description:
        "Built influence sharing dating and self-improvement content on social media.",
    },
    {
      src: bradly,

      title: "@Bradley Martin",
      description:
        " Shared workout routines and fitness tips on social media, promoting his gym business.",
    },
    {
      src: drake,
      title: "@Drake",
      description:
        "Used Instagram, Twitter, and Kick to promote music, connect with fans, and gambling.",
    },
    {
      src: Adin,
      title: "@Adin Ross",
      description:
        "Built following by streaming games and live chats with celebrities on Twitch.",
    },
    {
      src: Miami,
      title: "@Miami Swim Week",
      description:
        "Promoted shows and designers on Instagram and YouTube, creating global buzz.",
    },
    {
      src: Neon,
      title: "@Neon",
      description:
        "Gained popularity with entertaining gaming content on YouTube and Twitch.",
    },
    {
      src: KaiCent,
      title: "@Kai Cenat",
      description:
        "Grew influence with engaging Twitch and YouTube streams, often collaborating.",
    },
    {
      src: HUAK,
      title: "@Hauk Thua Girl",
      description:
        "Grew influence with relatable beauty and lifestyle content on Instagram and TikTok..",
    },
    {
      src: Andrew,
      title: "@Andrew Tate",
      description:
        "Used controversial content on Instagram and YouTube to build a large following.",
    },
  ];
  const IMAGES = [
    {
      src: imgs8,
      title: "@Sophie Rain",
      description:
        "Grew presence by sharing lifestyle, beauty, and travel content on Instagram and TikTok.",
    },
    {
      src: imgs1,
      title: "@Alex Hormozi",
      description: "Business growth strategist and entrepreneur.",
    },
    {
      src: imgs2,
      title: "@Donald Trump",
      description: "45th President of the United States.",
    },
    {
      src: imgs3,
      title: "@Joe Rogan",
      description: "Comedian, podcast host, and UFC commentator.",
    },
    {
      src: imgs3224,
      title: "@Jack Doherty",
      description:
        "Built influence with daring challenge videos, pranks, and vlogs on YouTube.",
    },
    {
      src: imgs5,
      title: "@Elon Musk",
      description: "CEO of SpaceX and Tesla.",
    },
    {
      src: imgs6,
      title: "@Myron Gaines",
      description:
        "Grew following with dating advice and lifestyle content on social media.",
    },
    {
      src: imgs7,
      title: "@Ninja",
      description:
        "Gained massive fame through Fortnite streams on Twitch and YouTube.",
    },
    {
      src: imgs9,
      title: "@SteveWillDoIt",
      description:
        "Gained popularity through outrageous challenges and stunts on YouTube and Instagram.",
    },
    {
      src: imgs10,
      title: "@Sean O'Malley",
      description:
        "Used social media to share training routines and fight highlights, connecting with fans.",
    },
    {
      src: imgs12,
      title: "@Yodit Yemane",
      description: "Model and Instagram influencer.",
    },
    {
      src: imgs11,
      title: "@XQC",
      description:
        "Became one of the most-watched streamers by engaging Twitch audiences with various games.",
    },
  ];

  const containerRef = useRef(null);
  const items = [
    { name: "Chloe", description: "Crypto Investing", content: "asgdasgs" },
    { name: "William", description: "Amazon FBA", content: "asgdasgs" },
    { name: "Arthur", description: "Amazon FBA", content: "asgdasgs" },
    { name: "Eric", description: "Amazon FBA", content: "asgdasgs" },
  ];
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
    <BackToTopPhone />
      <div className="home-hero-video">
      <video
          poster=""
          className={`video-hero ${isLoaded ? "loaded" : "blurred"}`}
          autoPlay
          onLoadedData={handleVideoLoad}
          loop
          muted
          playsInline
        >
          <source src={herovideophone} media="(max-width: 600px)" type="video/mp4" />
          <source src={herovideo} media="(min-width: 601px)" type="video/mp4" />
          <track kind="captions" srclang="en" label="English captions" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <Navbar />
        <HeroSectionLanding />
      </div>
      <div>
        
     <div className="challenge-card-phone">
     <ChallengeCard />
     </div>

        <div className="Container-Spacing">
          <div className="spacing-counter">
            <h1 className="information-container-header custom-header-title">
              Top <span className="glow-text">Influencers</span>
            </h1>
            <p className="custom-header-subtitle ">
              Top Influencers Using ClipperGoat Join the ranks of elite
              influencers who trust ClipperGoat to maximize their content:
            </p>
          </div>
          <div className="Container-Spacing">
            <SlideshowTop images={IMAGES} direction="left" />
            <SlideshowTop images={INFLUENCERS} direction="right" />
          </div>
        </div>

    <ServiceContainer />

        <LogoSlideshow />{" "}
        <div>
          <h1 className="information-container-header custom-header-title ">
            Industries that <div className="break-div"><br/></div><span className="glow-text">NEED THIS!</span>
          </h1>
          <p className="custom-header-subtitle ">
            ClipperGoat is ideal for short form marketing, addressing the high
            demand for online attention and traffic in today's era of short
            attention spans and constant phone usage across social media, sales
            funnels, video games, influencers, online education, explicit sites,
            and subscription services.
          </p>
        </div>
        <div className="Container-Spacing"></div>
        <Slideshow items={items} />
        <div className="Container-Spacing">
          <PricingSection />
        </div>
        <div className="Container-Spacing">
          <h1 className="information-container-header custom-header-title">
            Unlock Your <div className="break-div"><br/></div><span className="glow-text">Full Potential</span>
          </h1>
          <p className="custom-header-subtitle ">
          ClipperGoat revolutionizes social media management, driving traffic and engagement across all social media platforms. Users praise its powerful tools for optimizing content and maximizes reach.
          </p>
        </div>
        <Slider />
      </div>
      <div>
        <div className="Container-Spacing-Lg" id="faq-section">
          <h1 className="information-container-header custom-header-title ">
            Frequently  Asked <div className="break-div"><br/></div> <span className="glow-text">Questions</span>
          </h1>
          <p className="custom-header-subtitle ">
            You have questions, we have answers
          </p>
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
