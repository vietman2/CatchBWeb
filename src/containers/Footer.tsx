import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text-container">
        <p className="footer-head">(주)스윕시리즈</p>
        <p>사업자 등록번호 354-87-03036 | 대표 홍승우</p>
        <p>인천 서구 청라한내로72번길 17 416호</p>
        <div className="footer-links">
          <span className="footer-link" onClick={() => window.open('https://www.notion.so/b709f41b07f64bc094926584ed0375eb', '_blank')}>
            서비스 이용약관
          </span>
          <span className="footer-link" onClick={() => window.open('https://www.notion.so/f5b9a9d0447f43ccbe90974507dceeeb', '_blank')}>
            개인정보 처리방침
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;