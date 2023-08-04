import { Link } from "react-router-dom";
import "../../index.css";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
function isLoggedIn() {
  return true;
}
const Header = () => {
  const [logInState, setLogInState] = useState(false);
  const onlineStatus = useOnlineStatus();
  const userInfo = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <li className="px-2 font-bold">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>{userInfo.loggedInUser}</li>
        </ul>
      </div>
      {logInState ? (
        <button
          className="bg-white rounded-lg px-4"
          onClick={() => setLogInState(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-white rounded-lg px-4"
          onClick={() => setLogInState(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
