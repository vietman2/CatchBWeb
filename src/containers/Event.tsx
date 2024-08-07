import React from 'react';
import Slider from 'react-slick';
import eventImage1 from '../assets/images/eventimage1.png';
import eventImage2 from '../assets/images/eventimage2.png';
import eventImage3 from '../assets/images/eventimage3.png';
import './Event.css'; // 스타일 파일 임포트

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Event: React.FC = () => {
  return (
    <div className="event-container">
      <div className="events-section">
        <div className="events-title">EVENT</div>
        <Slider {...sliderSettings} className="events-slider">
          <div>
            <img src={eventImage1} alt="Event 1" className="event-image" />
          </div>
          <div>
            <img src={eventImage2} alt="Event 2" className="event-image" />
          </div>
          <div>
            <img src={eventImage3} alt="Event 3" className="event-image" />
          </div>
          <div>
            <img src={eventImage2} alt="Event 2" className="event-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Event;
