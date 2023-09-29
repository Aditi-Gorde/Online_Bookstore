// src/components/ImageCard.js
import React from 'react';
import '../assets/ImageCard.css' // You'll create this CSS file shortly

const ImageCard = () => {
  return (
    <div className="image-card-container">
      <img
        className="background-image"
        src="https://wallpaperaccess.com/full/1240335.jpg" // Replace with your image path
        alt="Background"
      />
      <div className="overlay-card">
        <h2>WHO ARE WE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quia rerum temporibus id possimus excepturi expedita earum recusandae est enim harum laboriosam saepe tempora, vel repudiandae consectetur ut. Incidunt, est?</p>
      </div>
    </div>
  );
};

export default ImageCard;
