import React from 'react';
import { Element } from 'react-scroll';
import Header from './containers/Header'; // Header 컴포넌트 추가
import AppIntro from './containers/AppIntro';
import Events from './containers/Events';
import Notices from './containers/Notices';
import PreOrder from './containers/PreOrder';
import HowToUse from './containers/HowToUse';
import Footer from './containers/Footer';
import NavBar from './containers/NavBar'; // NavBar 컴포넌트 추가
import './App.css'; // CSS 파일 추가

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Element name="appIntro" className="Section">
        <AppIntro />
      </Element>
      <Element name="events" className="Section">
        <Events />
      </Element>
      <Element name="notices" className="Section">
        <Notices />
      </Element>
      <Element name="preOrder" className="Section">
        <PreOrder />
      </Element>
      <Element name="howToUse" className="Section">
        <HowToUse />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
