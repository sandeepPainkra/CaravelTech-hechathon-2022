import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  function Click() {
    setShowLinks(!showLinks);
  }
  return (
    <div className="navbar">
      <div className="leftside" id={showLinks ? "open" : "close"}>
        ShopX
      </div>
      <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Shop</Link>
        <Link to="/about">Category</Link>
        <Link to="/contact">Profile</Link>
      </div>
      <div className="rightside">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/menu">
          Shop
        </Link>
        <Link className="links" to="/about">
          Category
        </Link>
        <Link className="links" to="/profile">
          Profile
        </Link>
        {/* <button onClick={Click}><ReorderIcon/></button> */}
      </div>
    </div>
  );
};
export default Navbar;
