import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <form>
        <label class="lbl">Username</label>
        <input type="text" placeholder="Full Name" />
        <label class="lbl">Email </label>
        <input type="email" placeholder="example@gmail.com" />
        <label class="lbl">Password </label>
        <input type="Password" placeholder="Enter Password" />
        <label class="lbl">Confirm Password </label>
        <input type="Password" placeholder="Confirm Password" />
        <button class="btn" type="submit">
          Sign Up
        </button>

        <div class="sent">
          <p>
            Already have an Account?
            <NavLink to="/signin" class="acc">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
