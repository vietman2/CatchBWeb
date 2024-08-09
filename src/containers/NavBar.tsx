import React, { useState } from 'react';
import { Link } from 'react-scroll';
import catchb from '../assets/images/catchb.svg'; // 로고 이미지 추가
import './NavBar.css'; // CSS 파일 추가

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <img src={catchb} alt="catchb" className="NavBar-catchb" />
        <div className={`NavBar-items ${menuOpen ? 'show' : ''}`}>
          <Link to="appIntro" smooth={true} duration={500} className="NavBar-item" onClick={toggleMenu}>앱소개</Link>
          <Link to="event" smooth={true} duration={500} className="NavBar-item" onClick={toggleMenu}>이벤트</Link>
          <Link to="preOrder" smooth={true} duration={500} className="NavBar-item" onClick={toggleMenu}>사전예약</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
