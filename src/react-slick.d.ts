declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      fade?: boolean;
      cssEase?: string;
      adaptiveHeight?: boolean;
      arrows?: boolean;
      prevArrow?: React.ReactNode;
      nextArrow?: React.ReactNode;
      [key: string]: any;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  