import React, { useRef, useState, Suspense, lazy } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSectionLanding from "../../components/HeroSectionLanding/HeroSectionLanding";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import FAQ from "../../components/FAQ/FAQ";
import SlideshowTop from "../../components/SlideshowTop/SlideshowTop";
import Footer from "../../components/Footer/Footer";
import PricingSection from "../../components/PricingSection/PricingSection";
import BackToTopPhone from "../../components/BackToTopPhone/BackToTopPhone";

import MrBeast from "../../assets/sliders/Mr Beast-DHAPQQbD.webp";
import RusselBrunson from "../../assets/sliders/Russel Brunson-CvFx6znF.webp";
import Ishowspeed from "../../assets/sliders/Ishowspeed-DNkkjSEJ.mp4";
import Fresh from "../../assets/sliders/Fresh-CSVHH5YB.webp";
import BradleyMartin from "../../assets/sliders/bradly Martin -BqweTirb.webp";
import Drake from "../../assets/sliders/drake -BIhWYZKE.mp4";
import AdinRoss from "../../assets/sliders/Adin Ross-Df2R3QaL.webp";
import MiamiSwimWeek from "../../assets/sliders/Miami Swim week-DJrbIFG-.mp4";
import Neon from "../../assets/sliders/Neon-BVKQ2nZB.mp4";
import KaiCent from "../../assets/sliders/KaiCent-04R6l1vw.webp";
import HaukThua from "../../assets/sliders/HUAK THUA-DtY9w-5c.mp4";
import AndrewTate from "../../assets/sliders/Andrew Tate-Bqj0NtsO.webp";

import SophieRain from "../../assets/sliders/Sophie Rain-C5eOe590.mp4";
import AlexHormozi from "../../assets/sliders/Alex Hormozi-Dez3mz4W.webp";
import DonaldTrump from "../../assets/sliders/Donald Trump -CDN_E9WQ.webp";
import JoeRogan from "../../assets/sliders/joe Rogan-B-qcs-7u.mp4";
import JackDoherty from "../../assets/sliders/Jack Doherty -BGBFZ6V8.webp";
import ElonMusk from "../../assets/sliders/Elon Musk-D5VfVzCf.webp";
import MyronGains from "../../assets/sliders/myron Gains-DHymw1N3.mp4";
import Ninja from "../../assets/sliders/Nija-B-PKZugA.webp";
import SteveWillDoIt from "../../assets/sliders/Stevewilldoit-DoHoI41C.mp4";
import SeanOMalley from "../../assets/sliders/Suga Sean Omalley-pNc5QJCo.webp";
import YoditYemane from "../../assets/sliders/Yodit Yemane -DCw_I_w4.webp";
import XQC from "../../assets/sliders/XQC-BVVmBF74.mp4";

const LogoSlideshow = lazy(() => import('../../components/LogoSlideshow/LogoSlideshow'));
const ServiceContainer = lazy(() => import('../../components/ServiceContainer/ServiceContainer'));
const Slider = lazy(() => import('../../components/Slider/Slider'));
const Slideshow = lazy(() => import('../../components/Slideshow/Slideshow'));


import "./Home.css";

const Home = () => {
  const heroVideoSources = [
    {
      src: "../../assets/videos/9;16 Hero.mp4",
      media: "(max-width: 600px)"
    },
    {
      src: "../../assets/videos/Updated final.mp4",
      media: "(min-width: 601px)"
    }
  ];

  const INFLUENCERS = [
    {
      src: MrBeast,
      title: "@MrBeast",
      description: "Gained popularity through high-budget, philanthropic, and viral YouTube videos.",
    },
    {
      src: RusselBrunson,
      title: "@Russell Brunson",
      description: "Used social media to share marketing strategies, building a large online community.",
    },
    {
      src: Ishowspeed,
      title: "@IShowSpeed",
      description: "Built influence through energetic and humorous gaming content on YouTube and Twitch.",
    },
    {
      src: Fresh,
      title: "@FreshPrinceCeo",
      description: "Built influence sharing dating and self-improvement content on social media.",
    },
    {
      src: BradleyMartin,
      title: "@Bradley Martin",
      description: "Shared workout routines and fitness tips on social media, promoting his gym business.",
    },
    {
      src: Drake,
      title: "@Drake",
      description: "Used Instagram, Twitter, and Kick to promote music, connect with fans, and gambling.",
    },
    {
      src: AdinRoss,
      title: "@Adin Ross",
      description: "Built following by streaming games and live chats with celebrities on Twitch.",
    },
    {
      src: MiamiSwimWeek,
      title: "@Miami Swim Week",
      description: "Promoted shows and designers on Instagram and YouTube, creating global buzz.",
    },
    {
      src: Neon,
      title: "@Neon",
      description: "Gained popularity with entertaining gaming content on YouTube and Twitch.",
    },
    {
      src: KaiCent,
      title: "@Kai Cenat",
      description: "Grew influence with engaging Twitch and YouTube streams, often collaborating.",
    },
    {
      src: HaukThua,
      title: "@Hauk Thua Girl",
      description: "Grew influence with relatable beauty and lifestyle content on Instagram and TikTok.",
    },
    {
      src: AndrewTate,
      title: "@Andrew Tate",
      description: "Used controversial content on Instagram and YouTube to build a large following.",
    },
  ];
  
  const IMAGES = [
    {
      src: SophieRain,
      title: "@Sophie Rain",
      description: "Grew presence by sharing lifestyle, beauty, and travel content on Instagram and TikTok.",
    },
    {
      src: AlexHormozi,
      title: "@Alex Hormozi",
      description: "Business growth strategist and entrepreneur.",
    },
    {
      src: DonaldTrump,
      title: "@Donald Trump",
      description: "45th President of the United States.",
    },
    {
      src: JoeRogan,
      title: "@Joe Rogan",
      description: "Comedian, podcast host, and UFC commentator.",
    },
    {
      src: JackDoherty,
      title: "@Jack Doherty",
      description: "Built influence with daring challenge videos, pranks, and vlogs on YouTube.",
    },
    {
      src: ElonMusk,
      title: "@Elon Musk",
      description: "CEO of SpaceX and Tesla.",
    },
    {
      src: MyronGains,
      title: "@Myron Gaines",
      description: "Grew following with dating advice and lifestyle content on social media.",
    },
    {
      src: Ninja,
      title: "@Ninja",
      description: "Gained massive fame through Fortnite streams on Twitch and YouTube.",
    },
    {
      src: SteveWillDoIt,
      title: "@SteveWillDoIt",
      description: "Gained popularity through outrageous challenges and stunts on YouTube and Instagram.",
    },
    {
      src: SeanOMalley,
      title: "@Sean O'Malley",
      description: "Used social media to share training routines and fight highlights, connecting with fans.",
    },
    {
      src: YoditYemane,
      title: "@Yodit Yemane",
      description: "Model and Instagram influencer.",
    },
    {
      src: XQC,
      title: "@XQC",
      description: "Became one of the most-watched streamers by engaging Twitch audiences with various games.",
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
    <Suspense fallback={<LoadingScreen />}>
    
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
              influencers who trust ClipperGoat to maximize their content.
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
