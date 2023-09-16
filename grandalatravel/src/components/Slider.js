import React from 'react';
import './Slider.css';
import XidmetlerPage from './Xidmetler';
const image = 'https://imgproxy.natucate.com/4DIs4NfaO9PHuIGE_iCBRPrvXOnO1m0vwYAldSKjSe8/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlYXJ0ZW4vNmMwODZlYmEtNzk3Yi00ZDVjLTk2YTItODhhNGM4OWUyODdlLzc1MWZiZjc0YmItMTY3OTQ4NjA5Mi8xMl9kYW5pZWxfY2FuX2JjLTIwNy5qcGc';
const text = 'Grandala Travel ilə səyahət et';
const buttonText = 'Bron Et';

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={image} alt="Slider Image" />
        <div className="slider-buttons">
          <div className="slider-text">{text}</div>
          <button className="slider-button">{buttonText}</button>
        </div>
      </div>
      <XidmetlerPage/>
    </div>
  );
};

export default Slider;
