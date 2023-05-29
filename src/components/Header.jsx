import { Link } from "react-router-dom";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
function isLoggedIn() {
  return true;
}
const Header = () => {
  const [logInState, setLogInState] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {logInState ? (
        <button onClick={() => setLogInState(false)}>Logout</button>
      ) : (
        <button onClick={() => setLogInState(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
