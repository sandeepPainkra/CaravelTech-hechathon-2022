import React from "react";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menu-item">
      <img className="food-img" src={image} alt="food" />
      <div className="menu_itemInfo">
        <h2>{name}</h2>
        <p>this is demo description</p>
        <h4>₹{price}</h4>
      </div>
    </div>
  );
};

export default MenuItem;
