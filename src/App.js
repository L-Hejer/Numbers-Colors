import React, { useState } from 'react';
import ChooseANumber from './Components/ChooseANumber';
import Cells from './Components/Cells';

import './App.css';

const App = () => {
  const [cells, setCells] = useState([]);

  //Generating numbers between 100 & -100
  const getRandomNumbers = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  //function that returns an array of random numbers between -100 & 100
  const arrayOfNumbers = (x) => {
    let array = [];
    for (let i = 0; i < x; i++) {
      array.push(getRandomNumbers(-100, 100));
    }

    return array;
  };

  // function that takes a number and returns a color
  const numberToColor = (percent) => {
    return percent > 0
      ? `rgb(${Math.round((percent * 255) / 100)}, 0, 0)`
      : `rgb(0, ${Math.abs(Math.round((percent * 255) / 100))}, 0)`;
  };

  const handleSubmit = (e, inputValue) => {
    e.preventDefault();
    setCells(arrayOfNumbers(inputValue));
  };

  return (
    <div className="App">
      <ChooseANumber handleSubmit={handleSubmit} />
      <Cells cells={cells} numberToColor={numberToColor} />
    </div>
  );
};

export default App;

/* //From RGB to Hexadecimal
let rgbToHexadecimal = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};


let fullColorrgbToHexadecimal = (r, g, b) => {
  let red = rgbToHexadecimal(r);
  let green = rgbToHexadecimal(g);
  let blue = rgbToHexadecimal(b);
  return red + green + blue;
};
 */
