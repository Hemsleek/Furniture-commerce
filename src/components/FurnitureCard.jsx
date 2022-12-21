import React from "react";
import "./FurnitureCard.css";

const FurnitureCard = ({ name, img, price }) => {
  console.log({ img });
  return (
    <div className="furnitureCard">
      <div className="image-wrapper">
        <img src={`/${img}.png`} alt="furniture-img" />
      </div>
      <div className="sect">
        <span className="furniture-name">{name}</span>
        <span className="price">Rs. {price}</span>
      </div>
    </div>
  );
};

export default FurnitureCard;
