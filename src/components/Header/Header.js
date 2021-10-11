import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.email && (
          <span className="text-white me-3">{user.displayName}</span>
        )}
        {user.email ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;

/*
steps for authentication
----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
------------------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for LOgin and Register
------------------------
Step 3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
---------------------
Step 4: create auth context hook (useAuth)
1. create a auth context
2. Create context Provider
3. set context Provider context value
4. use Auth Provider
5. create useAuth Hook
---------------------
Step 5: create private route
1. create private Route
2. set private route
------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination
*/
