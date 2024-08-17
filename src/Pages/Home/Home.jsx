import React, { useRef, useState, Suspense, lazy } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSectionLanding from "../../components/HeroSectionLanding/HeroSectionLanding";

const PricingSection = lazy(() => import('../../components/PricingSection/PricingSection'));

const LogoSlideshow = lazy(() => import('../../components/LogoSlideshow/LogoSlideshow'));

const BackToTopPhone = lazy(() => import('../../components/BackToTopPhone/BackToTopPhone'));
const ServiceContainer = lazy(() => import('../../components/ServiceContainer/ServiceContainer'));

const FAQ = lazy(() => import('../../components/FAQ/FAQ'));

const Slider = lazy(() => import('../../components/Slider/Slider'));

// import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
const Slideshow = lazy(() => import('../../components/Slideshow/Slideshow'));

import SlideshowTop from "../../components/SlideshowTop/SlideshowTop";
const Footer = lazy(() => import('../../components/Footer/Footer'));

import "./Home.css";

const Home = () => {
  const heroVideoSources = [
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/9_16 hero-BSZAWict.mp4",
      media: "(max-width: 600px)"
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Updated final-BDiza0Ii.mp4",
      media: "(min-width: 601px)"
    }
  ];

  const INFLUENCERS = [
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Mr Beast-DHAPQQbD.webp",
      title: "@MrBeast",
      description:
        "Gained popularity through high-budget, philanthropic, and viral YouTube videos.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Russel Brunson-CvFx6znF.webp",

      title: "@Russell Brunson",
      description:
        "Used social media to share marketing strategies, building a large online community.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Ishowspeed-DNkkjSEJ.mp4",

      title: "@IShowSpeed",
      description:
        "Built influence through energetic and humorous gaming content on YouTube and Twitch.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Fresh-CSVHH5YB.webp",
      title: "@FreshPrinceCeo",
      description:
        "Built influence sharing dating and self-improvement content on social media.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/bradly Martin -BqweTirb.webp",

      title: "@Bradley Martin",
      description:
        " Shared workout routines and fitness tips on social media, promoting his gym business.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/drake -BIhWYZKE.mp4",
      title: "@Drake",
      description:
        "Used Instagram, Twitter, and Kick to promote music, connect with fans, and gambling.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Adin Ross-Df2R3QaL.webp",
      title: "@Adin Ross",
      description:
        "Built following by streaming games and live chats with celebrities on Twitch.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Miami Swim week-DJrbIFG-.mp4",
      title: "@Miami Swim Week",
      description:
        "Promoted shows and designers on Instagram and YouTube, creating global buzz.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Neon-BVKQ2nZB.mp4",
      title: "@Neon",
      description:
        "Gained popularity with entertaining gaming content on YouTube and Twitch.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/KaiCent-04R6l1vw.webp",
      title: "@Kai Cenat",
      description:
        "Grew influence with engaging Twitch and YouTube streams, often collaborating.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/HUAK THUA-DtY9w-5c.mp4",
      title: "@Hauk Thua Girl",
      description:
        "Grew influence with relatable beauty and lifestyle content on Instagram and TikTok..",
    },
    {
  src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Andrew Tate-Bqj0NtsO.webp",
      title: "@Andrew Tate",
      description:
        "Used controversial content on Instagram and YouTube to build a large following.",
    },
  ];
  const IMAGES = [
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Sophie Rain-C5eOe590.mp4",
      title: "@Sophie Rain",
      description:
        "Grew presence by sharing lifestyle, beauty, and travel content on Instagram and TikTok.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Alex Hormozi-Dez3mz4W.webp",
      title: "@Alex Hormozi",
      description: "Business growth strategist and entrepreneur.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Donald Trump -CDN_E9WQ.webp",
      title: "@Donald Trump",
      description: "45th President of the United States.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/joe Rogan-B-qcs-7u.mp4",
      title: "@Joe Rogan",
      description: "Comedian, podcast host, and UFC commentator.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Jack Doherty -BGBFZ6V8.webp",
      title: "@Jack Doherty",
      description:
        "Built influence with daring challenge videos, pranks, and vlogs on YouTube.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Elon Musk-D5VfVzCf.webp",
      title: "@Elon Musk",
      description: "CEO of SpaceX and Tesla.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/myron Gains-DHymw1N3.mp4",
      title: "@Myron Gaines",
      description:
        "Grew following with dating advice and lifestyle content on social media.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Nija-B-PKZugA.webp",
      title: "@Ninja",
      description:
        "Gained massive fame through Fortnite streams on Twitch and YouTube.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Stevewilldoit-DoHoI41C.mp4",
      title: "@SteveWillDoIt",
      description:
        "Gained popularity through outrageous challenges and stunts on YouTube and Instagram.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Suga Sean Omalley-pNc5QJCo.webp",
      title: "@Sean O'Malley",
      description:
        "Used social media to share training routines and fight highlights, connecting with fans.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Yodit Yemane -DCw_I_w4.webp",
      title: "@Yodit Yemane",
      description: "Model and Instagram influencer.",
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/XQC-BVVmBF74.mp4",
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

    < 
    >
    <Suspense fallback={<div>Loading...</div>}>
<div className="newoverlay"></div>
    
    <BackToTopPhone />
      <div className="home-hero-video">

        <Navbar />
        <HeroSectionLanding />
      </div>
      <div>
        
        
     {/* <div className="challenge-card-phone">
     <ChallengeCard />
     </div> */}

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
        <div className="Container-Spacing-Lg">
          <h1 className="information-container-header custom-header-title">
            Unlock Your <div className="break-div"><br/></div><span className="glow-text">Full Potential</span>
          </h1>
          <p className="custom-header-subtitle ">
          ClipperGoat revolutionizes social media management, driving traffic and engagement across all social media platforms. Users praise its powerful tools for optimizing content and maximizes reach.
          </p>
        </div>
        <div className="Container-Spacing-desktop"></div>
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
    </Suspense>
    </>
  );
};

export default Home;
