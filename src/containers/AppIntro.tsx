import React, { useState, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import './AppIntro.css';
import main1 from '../assets/images/main.png';
import main2 from '../assets/images/reservation.png';
import main3 from '../assets/images/community.png';
import main4 from '../assets/images/promain.png';
import Tabs from '../components/Tabs'; // Tabs 컴포넌트 임포트

interface TabContent {
  title: string[];
  description: string[];
}

const tabContent: { [key: string]: TabContent } = {
  '홈': {
    title: ['야구에 혁신을 더하는 플랫폼'],
    description: [
      '몇 번의 터치만으로 불편함없이 간편하게!',
      '가까운 거리의 아카데미를 스마트하게!'
    ],
  },
  '예약': {
    title: ['간편한 직관적인 예약 시스템'],
    description: [
      '번거로움 없이 간편하게 원하는 스케줄을 예약하고 관리하세요!',
      '맞춤형 아카데미와 레슨을 추천받아 빠르게 예약하세요.'
    ],
  },
  '커뮤니티': {
    title: ['야구만을 위한 소통 공간'],
    description: [
      '정보 교환부터 팀원, 용병 모집까지! 야구에 대한 열정을 나누세요!',
      '야구 팬들과의 소통을 통해 새로운 인연과 정보를 얻어보세요.'
    ],
  },
  '프로모드': {
    title: ['전문가를 위한 강력한 업무관리시스템'],
    description: [
      '예약 승인, 코치 등록, 아카데미 관리까지 쉽고 빠르게 처리하세요.',
      '프로모드로 효율적인 업무 관리를 통해 운영을 최적화하세요.'
    ],
  },
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
  const [animationKey, setAnimationKey] = useState(0);
  const tabNames = Object.keys(tabContent); // AppIntro 페이지에서 사용할 탭 이름
  const sliderRef = useRef<SliderType | null>(null);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const handleSliderChange = (current: number) => {
    setSelectedTab(imageTabIndex[current]);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드를 활성화
    autoplaySpeed: 8500,
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
        <div key={animationKey} className="appintro-title fade-in-title">
          {tabContent[selectedTab].title.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div key={`${animationKey}-desc`} className="appintro-description fade-in-description">
          {tabContent[selectedTab].description.map((line, lineIndex) => (
            <div key={lineIndex} className="description-line">
              {line.split('').map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="description-char"
                  style={{ animationDelay: `${lineIndex * 2 + charIndex * 0.05 + 1.5}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppIntro;
