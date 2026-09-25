import React from 'react';
import HeroSectionLeader from '../../components/HeroSectionLeader/HeroSectionLeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import InfoCard from '../../components/InfoCard/InfoCard';
import './Leaderboard.css';
import pfpimg from '../../assets/500x500.jpg';
import imageSmall from '../../assets/radiengoat-small.webp';
import imageMedium from '../../assets/radiengoat-medium.webp';
import imageLarge from '../../assets/radiengoat-large.webp';

const LeaderboardItem = ({ username, userTag, rank, isUp, earnings }) => (
  <div className="profile-container">
    <div className="user-content">
      <img src={pfpimg} alt={username} />
      <div className="user-info">
        <p className="username-info">{username}</p>
        <p className='user-earnings'>{earnings}</p>
        <p className="user-tag">{userTag}</p>
      </div>
    </div>
    <div className="user-rank">
      <p>{rank}</p>
      <i className={`fa-solid fa-caret-${isUp ? 'up' : 'down'}`}></i>
    </div>
  </div>
);

const LeaderboardCard = ({ rank, name, score, username, isGoat, isGoat2 }) => (
  <div className={`leader-card ${isGoat ? 'goat' : ''} ${isGoat2 ? 'goat2' : ''}`}>
    {isGoat && <div className="crown">👑</div>}
    {isGoat ? (
      <div className='goat-number'><p>{rank}</p></div>
    ) : isGoat2 ? (
      <div className='goat2-number'><p>{rank}</p></div>
    ) : (
      <div className="rank-number"><p>{rank}</p></div>
    )}
    <div className={`avatar ${isGoat ? 'goat-avatar' : isGoat2 ? 'goat2-avatar' : ''}`}>
      <img src={pfpimg} alt={name} />
    </div>
    <div className="name">{name}</div>
    <div className="score" style={{ color: rank === 1 ? '#f1c40f' : rank === 2 ? '#3498db' : '#2ecc71' }}>{score}</div>
    <div className="username">{username}</div>
  </div>
);


const Leaderboard = () => {
  const topLeaders = [
    { rank: 2, name: "Gold Goats", score: "$539,946", username: "@jackson", isGoat2: true  },
    { rank: 1, name: "Diamond TRUE GOAT", score: "$5,999,940", username: "@eiden", isGoat: true },
    { rank: 3, name: "Silver Goats", score: "$240,000", username: "@emmaaria" }
  ];

  const leaderboardData = [
    { username: 'Diamond TRUE GOAT', userTag: '@Sebastien', rank: 357, isUp: true, number: 4, earnings: "$5,999,940" },
    { username: 'Gold Goat', userTag: '@Alice', rank: 286, isUp: false, number: 5, earnings: "$2,699,94" },
    { username: 'Silver Goat', userTag: '@Bob', rank: 224, isUp: true, number: 6, earnings: "$3,999,9" },
    { username: 'Bronze Goat', userTag: '@Charlie', rank: 198, isUp: true, number: 7, earnings: "$9,999" },
    { username: 'Billy Goat', userTag: '@David', rank: 176, isUp: false, number: 8, earnings: "$5,999" },
    { username: 'Lambs', userTag: '@Eva', rank: 165, isUp: true, number: 9, earnings: "$2,399" },
    { username: 'Sheep', userTag: '@Frank', rank: 152, isUp: false, number: 10, earnings: "$1,3990" },
  ];

  return (
    <>
      <div className="clippergoat-app-header">
        <img
          alt="A captivating image of a radiant goat"
          className="imghero"
          src={imageMedium}
          srcSet={`${imageSmall} 320w, ${imageMedium} 640w, ${imageLarge} 1024w`}
        />
        <div className="overlay"></div>   
        <Navbar />               
        <HeroSectionLeader />
      </div>
      <div>
        <div className='LeaderContainer'>
        <div className="LeaderBoardSection Container-Spacing">
        <h1 className="custom-header-title-leaderboard">Clipper Goat <br/> 10  Million Dollar <span className="information-container-header-span glow-text"> Affiliate Program</span></h1>
            <p className="custom-header-subtitle ">Exactly what you can find inside Active Income</p>

            <div className="leaderboard-rank-info-container">
              <div className="leaderboard-container">
                {topLeaders.map((leader) => (
                  <LeaderboardCard key={leader.rank} {...leader} />
                ))}
              </div>
            </div>
         
            <div className="LeaderBoard-container">
              <div className='LeaderBoardCard popular'>
                <p className='pricing-card-header'></p>
                <div className="profile-content">
                  {leaderboardData.map((user, index) => (
                    <LeaderboardItem key={index} {...user} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoCard />
        <Footer />
      </div>
    </>
  );
};

export default Leaderboard;
