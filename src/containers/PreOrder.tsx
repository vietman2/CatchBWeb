import React, { useState, useEffect } from 'react';
import './PreOrder.css';
import logo from '../assets/images/logo.png'; // 로고 이미지 추가

const texts = [
  "경험해보지 못한 편리함, 손쉬운 접근으로 더 많은 즐거움을!",
  "경기장에서 느끼는 감동, 야구 팬을 위한 혁신적인 솔루션!",
  "야구에 더해지는 새로운 패러다임.", 
  "야구의 새로운 시대가 시작됩니다.",
  "스마트한 야구 팬들을 위한 필수 앱.",
  "야구의 미래, 지금 사전예약으로 먼저 경험하세요.",
  "logo" // 로고를 보여줄 위치
];

const PreOrder: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const textLength = texts[currentTextIndex].length;
    const baseSpeed = 100; // 기본 타이핑 속도(ms)
    const typingDuration = textLength * baseSpeed;
    const blinkDuration = 2000; // blink 효과 2초

    // CSS 변수 설정
    document.documentElement.style.setProperty('--typing-duration', `${typingDuration}ms`);
    document.documentElement.style.setProperty('--steps', `${textLength}`);

    if (texts[currentTextIndex] === "logo") {
      // 로고가 나타날 때는 10초 대기
      timeout = setTimeout(() => {
        setCurrentTextIndex(0);
        setIsTyping(true);
      }, 10000);
    } else {
      timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => prevIndex + 1);
          setIsTyping(true);
        }, blinkDuration);
      }, typingDuration);
    }

    return () => clearTimeout(timeout);
  }, [currentTextIndex]);

  return (
    <div className="pre-order-container">
      {texts[currentTextIndex] === "logo" ? (
        <img src={logo} alt="Catch B" className="logo-large" />
      ) : (
        <div className={`fade-text ${isTyping ? 'typing' : 'typing finished'}`}>
          {texts[currentTextIndex]}
        </div>
      )}
      <button className="pre-order-download-button">아카데미 사전예약 신청하러 가기</button>
    </div>
  );
};

export default PreOrder;
