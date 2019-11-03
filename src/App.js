import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import {
//   Route,
//   Switch,
// } from 'react-router-dom';
import './styles/style.css';
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './views/HomePage';
import Navigation from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  const [activeClass, setActiveClass] = useState('')
  const [position, setPosition] = useState(0)

  // const containerElem = useRef(null);
  // const initialMousePos = { x: 0, y: 0 };

  // const [mousePos, setMousePos] = useState(initialMousePos);
  
  // const handleMouseMove = event => {
  //   event = event.nativeEvent;
  //   const elem = containerElem.current;
  //   const newX = (event.offsetX / elem.clientWidth) * 100;
  //   const newY = (event.offsetY / elem.clientHeight) * 100;
  //   const newMousePos = {
  //     x: newX,
  //     y: newY
  //   };
  //   setMousePos(newMousePos);
  // };

  // const handleMouseOut = () => setMousePos(initialMousePos);

  const onScroll= e => {
    console.log('position: ', e.target.scrollTop, ' screen: ', window.innerHeight)
    e.target.scrollTop > 9 ? setActiveClass('dark') : setActiveClass('');
    if (e.target.scrollTop < 10) e.target.scrollTop = 0;
    // if (e.target.scrollTop > 460 && e.target.scrollTop < 800); e.target.scrollTop = window.innerHeight;
    setPosition(e.target.scrollTop);
  }
  


  return (
    <div className="App" onScroll={onScroll}>
      <Navigation
        activeClass={activeClass}
      />    
      <HomePage 
        position={position}
      />  
    </div>
  );
}

export default App;
