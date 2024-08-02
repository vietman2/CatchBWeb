import React from 'react';
import appImage from '../assets/images/logo.png'; // 앱 이미지 추가
import './Events.css';

const Events: React.FC = () => {
  return (
    <div className="event-container">
      <div className="image-container">
        <img src={appImage} alt="App screenshot" className="app-image" />
      </div>
      <div className="text-container">
        <h1>야구에 혁신을 더하다</h1>
        <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
      </div>
    </div>
  );
};

export default Events;