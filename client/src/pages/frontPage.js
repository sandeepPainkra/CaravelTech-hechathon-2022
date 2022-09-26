import React from "react";
import Data from "../data/data.js";
import "../Styles/frontPage.css";
import MenuItem from "../components/MenuItem.js";
import Crousal from "../components/Crousal.js";

const Frontpage = () => {
  return (
    <div className="menu">
      <Crousal />
      <div className="menu-title">
        <div className="menu-list">
          {Data.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Frontpage;
