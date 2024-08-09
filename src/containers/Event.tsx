import React, { useEffect } from 'react';
import Slider from 'react-slick';
import eventImage1 from '../assets/images/eventimage1.png';
import eventImage2 from '../assets/images/eventimage2.png';
import eventImage3 from '../assets/images/eventimage3.png';
import './Event.css'; // 스타일 파일 임포트

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 7000, // 이동 속도 조정
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // 자동 재생 속도 조정
  cssEase: 'linear', // 부드럽게 이동
};

const Event: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');

    const handleScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 페이지 로드 시 한 번 실행

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="event-container fade-up">
      <div className="events-section">
        <div className="events-title fade-up">EVENT</div>
        <div className="events-subtitle fade-up">다양한 이벤트에 참여하세요!</div>
        <Slider {...sliderSettings} className="events-slider fade-up">
          <div className="event-slick-slide">
            <img src={eventImage1} alt="Event 1" className="event-image fade-up" />
          </div>
          <div className="event-slick-slide">
            <img src={eventImage2} alt="Event 2" className="event-image fade-up" />
          </div>
          <div className="event-slick-slide">
            <img src={eventImage3} alt="Event 3" className="event-image fade-up" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Event;
