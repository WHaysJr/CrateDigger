import React, { useState } from "react";
import "./visual.scss";
import ImgComp from "./ImgComp";
import four from "./pics/four.jpg";

import one from "./pics/one.jpg";
import two from "./pics/two.jpg";
import three from "./pics/three.jpg";

function Visual() {
  let sliderArr = [
    <ImgComp src={four}></ImgComp>,
    <ImgComp src={one}></ImgComp>,
    <ImgComp src={two}></ImgComp>,
    <ImgComp src={three}></ImgComp>,
    //   <div className="announcement">
    //   <h1>Latest Announcement</h1>
    //   <br />
    //   <br />
    //   <p>Announcement details...</p>
    //   <p>More details...</p>
    // </div>,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div claasName="visual" id="visual">
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Visual;
