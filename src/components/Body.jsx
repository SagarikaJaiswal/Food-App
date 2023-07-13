import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import "../../index.css";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //Local state variable-super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

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
    setListOfRestaurants(dataObject?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestaurants(dataObject?.data?.cards?.[2]?.data?.data?.cards);
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
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
