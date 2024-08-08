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
          <h1>"Catch the Best, Play Your Best."</h1> {/* 영어 슬로건 추가 */}
          <img src={Logo} alt="Catch B" className="catchb-Logo" /> {/* Catch B 이미지 추가 */}
          <button className="download-button">앱 다운로드</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
