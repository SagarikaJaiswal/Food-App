import { Link } from "react-router-dom";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
function isLoggedIn() {
  return true;
}
const Header = () => {
  const [logInState, setLogInState] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex m-1 p-1 justify-between bg-pink-50">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="my-3 py-3">
        <ul className="flex m-1 p-1 items-center">
          <li className="px-2">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            {" "}
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2"><Link to="/grocery">Grocery</Link></li>
        </ul>
      </div>
      {logInState ? (
        <button  className="bg-white rounded-lg px-4" onClick={() => setLogInState(false)}>Logout</button>
      ) : (
        <button className="bg-white rounded-lg px-4" onClick={() => setLogInState(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
