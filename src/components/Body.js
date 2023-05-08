import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import "../../index.css";
const Body = () => {
  //Local state variable-super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "635227",
        name: "Bakingo",
        cloudinaryImageId: "9fc6c247e09254670265953d03701280",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        costForTwo: 29900,
        deliveryTime: 22,
        avgRating: "3.4",
      },
    },
    {
      data: {
        id: "635228",
        name: "CheeseCakes",
        cloudinaryImageId: "9fc6c247e09254670265953d03701280",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        costForTwo: 29900,
        deliveryTime: 22,
        avgRating: "4.5",
      },
    },
  ]);
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
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
