import React from 'react';
import Slider from 'react-slick';
import './Header.css';
import mlbimage1 from '../assets/images/mlbimage1.jpg';
import mlbimage2 from '../assets/images/mlbimage2.jpg';
import mlbimage3 from '../assets/images/mlbimage3.jpg';
import Logo from '../assets/images/Logo.svg'; // Catch B 이미지 추가

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
};

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <Slider {...sliderSettings} className="slider-container">
        <div>
          <img src={mlbimage1} alt="MLB 1" className="header-image" />
        </div>
        <div>
          <img src={mlbimage2} alt="MLB 2" className="header-image" />
        </div>
        <div>
          <img src={mlbimage3} alt="MLB 3" className="header-image" />
        </div>
      </Slider>
      <div className="header-gradient"></div> {/* 그라디언트 오버레이 추가 */}
      <div className="overlay">
        <div className="header-text-container">
          <h1>
            야구에 <span className="highlight-green">혁</span>
            <span className="highlight-yellow">신</span>을 더하다
          </h1>
          <p>
            AI를 더해 <span className="highlight-yellow">간</span>
            <span className="highlight-green">편</span>해진 야구 아카데미 / 레슨 예약 서비스
          </p>
          <img src={Logo} alt="Catch B" className="catchb-Logo" /> {/* Catch B 이미지 추가 */}
          <button className="download-button">앱 다운로드</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
