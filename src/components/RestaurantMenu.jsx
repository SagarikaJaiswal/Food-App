import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [ItemIndex, setItemIndex] = useState(null);
  //const { name } = resInfo?.cards[0]?.card?.card?.info;
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = resInfo?.cards?.[0]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCategory = itemCards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  return (
    <div className=" bg-gray-100 ">
      <div className="flex flex-col  w-6/12 m-auto">
        <h1 className="font-bold text-2xl m-auto p-4">{name}</h1>
        {/* <img src={CDN_URL + cloudinaryImageId} /> */}
        <p className="font-bold text-lg m-auto p-4">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <div className="m-auto accordion">
          {itemCategory.map((c, index) => {
            //controlled componenet
            return (
              <RestaurantCategory
                key={index}
                data={c}
                isActive={ItemIndex === index ? true : false}
                showItems={ItemIndex === index ? true : false}
                setItemIndex={() => setItemIndex(index)}
              ></RestaurantCategory>
            );
          })}
        </div>
        {/* <p>{areaName}</p> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
