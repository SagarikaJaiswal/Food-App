import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData.data);
    setResInfo(jsonData.data);
  }

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

  const { itemCards } =
    resInfo.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        {/* <img src={CDN_URL + cloudinaryImageId} /> */}
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        <p>{areaName}</p>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
