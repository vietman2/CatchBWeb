import React from 'react';
import eventImage1 from '../assets/images/eventimage1.png';
import eventImage2 from '../assets/images/eventimage2.png';
import './Events.css';

const Events: React.FC = () => {
  return (
    <div className="event-container">
      <div className="text-top-left">
        <div className="title">
          <span className="highlight">편리</span>하고 <span className="highlight">간편</span>한 야구 레슨 예약,<br />함께 만들어가요 !
        </div>
      </div>
      <div className="image-bottom-left">
        <img src={eventImage1} alt="Event 1" className="event-image" />
      </div>
      <div className="image-top-right">
        <img src={eventImage2} alt="Event 2" className="event-image" />
      </div>
      <div className="text-bottom-left">
        <div className="highlight-large">
          아카데미 정보 제공으로<br />
          <span className="bold">할인쿠폰</span>과 <span className="bold">포인트</span> 받기 !
        </div>
      </div>
    </div>
  );
};

export default Events;
