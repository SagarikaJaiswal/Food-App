import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import "../../index.css";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local state variable-super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //Normal JS variable
  // const listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "635227",
  //       name: "Bakingo",
  //       cloudinaryImageId: "9fc6c247e09254670265953d03701280",
  //       cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //       costForTwo: 29900,
  //       deliveryTime: 22,
  //       avgRating: "3.4",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "635228",
  //       name: "CheeseCakes",
  //       cloudinaryImageId: "9fc6c247e09254670265953d03701280",
  //       cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //       costForTwo: 29900,
  //       deliveryTime: 22,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  //function for fetching the data
  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const dataObject = await data.json();
    console.log(dataObject);
    setListOfRestaurants(dataObject?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(dataObject?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("RENDER");
  //if(listOfRestaurants)

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="filter">
          <button
            className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
