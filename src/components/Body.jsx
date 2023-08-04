import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import "../../index.css";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Local state variable-super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { setUserName } = useContext(UserContext);
  // console.log(listOfRestaurants);
  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    getRestaurants();
  }, []);

  //function for fetching the data
  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const dataObject = await data.json();
    //console.log(dataObject);
    setListOfRestaurants(
      dataObject?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      dataObject?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  // console.log("RENDER");
  //if(listOfRestaurants)
  if (onlineStatus === false) {
    return <h1>Please check your internet connection!!!!</h1>;
  }

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container flex my-4 justify-center">
        <input
          type="text"
          className="search-input border border-black mx-4"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="filter">
          <button
            className="filter-btn bg-green-200 p-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.data?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label className="p-2">Username : </label>
          <input
            className="border border-black p-2"
            onChange={(e) => {
              const data = e.target.value;
              setUserName(data);
            }}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
