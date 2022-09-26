import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <label class="lbl">Username</label>
        <input type="text" placeholder="Full Name" />
        <label class="lbl">Email </label>
        <input type="email" placeholder="example@gmail.com" />
        <label class="lbl">Password </label>
        <input type="Password" placeholder="Enter Password" />
        <button class="btn" type="submit">
          Login
        </button>

        <div class="sent">
          <p>
            Don't have an Account?
            <NavLink to="/signup" class="acc">
              Register
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
