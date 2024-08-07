import React, { useState, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import './AppIntro.css';
import main1 from '../assets/images/main.png';
import main2 from '../assets/images/reservation.png';
import main3 from '../assets/images/community.png';
import main4 from '../assets/images/promain.png';
import Tabs from '../components/Tabs'; // Tabs 컴포넌트 임포트

interface TabContent {
  title: string;
  description: string;
  highlight: string;
}

const tabContent: { [key: string]: TabContent } = {
  '홈': {
    title: '직접 문의하는 것보다 빠르게!',
    description: '몇 번의 터치만으로 불편함없이 간편하게!',
    highlight: '캐치비만의 간편예약 기능으로 시간을 절약하세요'
  },
  '예약': {
    title: '간편한 예약 시스템',
    description: '빠르고 쉽게 예약하세요!',
    highlight: '캐치비에서 예약 관리까지 한 번에!'
  },
  '커뮤니티': {
    title: '함께하는 야구',
    description: '다른 사용자들과 소통해보세요!',
    highlight: '커뮤니티 기능으로 다양한 정보를 교환하세요'
  },
  '프로모드': {
    title: '프로 모드 기능',
    description: '더 전문적인 기능을 활용하세요!',
    highlight: '프로모드로 더 많은 혜택을 누리세요'
  },
};

const tabImageIndex: { [key: string]: number } = {
  '홈': 0,
  '예약': 1,
  '커뮤니티': 2,
  '프로모드': 3,
};

const imageTabIndex: { [key: number]: string } = {
  0: '홈',
  1: '예약',
  2: '커뮤니티',
  3: '프로모드'
};

type SliderType = Slider & { slickGoTo: (index: number) => void };

const AppIntro: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('홈');
  const tabNames = Object.keys(tabContent); // AppIntro 페이지에서 사용할 탭 이름
  const sliderRef = useRef<SliderType | null>(null);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(tabImageIndex[tab]);
    }
  };

  const handleSliderChange = (current: number) => {
    setSelectedTab(imageTabIndex[current]);
  };

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드를 활성화
    autoplaySpeed: 5000,
    afterChange: handleSliderChange // 슬라이드 변경 후 이벤트 핸들러 추가
  };

  return (
    <div className="app-intro-container">
      <div className="appintro-image-container">
        <div className="phone-frame">
          <Slider ref={sliderRef} {...sliderSettings} className="appintro-slider-container">
            <div>
              <img src={main1} alt="Screen 1" className="screen-image" />
            </div>
            <div>
              <img src={main2} alt="Screen 2" className="screen-image" />
            </div>
            <div>
              <img src={main3} alt="Screen 3" className="screen-image" />
            </div>
            <div>
              <img src={main4} alt="Screen 4" className="screen-image" />
            </div>
          </Slider>
          <div className="iphone-overlay"></div> {/* iPhone 테두리 오버레이 */}
        </div>
      </div>
      <div className="appintro-text-container">
        <Tabs tabNames={tabNames} onTabClick={handleTabClick} selectedTab={selectedTab} /> {/* Tabs 컴포넌트에 props 전달 */}
        <div className="appintro-title">{tabContent[selectedTab].title}</div>
        <div className="appintro-description">{tabContent[selectedTab].description}</div>
        <div className="appintro-highlight">{tabContent[selectedTab].highlight}</div>
      </div>
    </div>
  );
};

export default AppIntro;
