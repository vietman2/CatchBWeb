import React from 'react';
import { Element } from 'react-scroll';
import Header from './containers/Header'; // Header 컴포넌트 추가
import AppIntro from './containers/AppIntro';
import Event from './containers/Event'; // Combined 컴포넌트 임포트
import PreOrder from './containers/PreOrder';
import Footer from './containers/Footer';
import NavBar from './containers/NavBar'; // NavBar 컴포넌트 추가
import './App.css'; // CSS 파일 추가

const App: React.FC = () => {
  return (
    <div className="App">
      <Element name="Header" className="Section">
        <NavBar />
        <Header />
      </Element>
      <Element name="appIntro" className="Section">
        <AppIntro />
      </Element>
      <Element name="event" className="Section">
        <Event /> {/* 통합된 컴포넌트 사용 */}
      </Element>
      <Element name="preOrder" className="Section">
        <PreOrder />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
