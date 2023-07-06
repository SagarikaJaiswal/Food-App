import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
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
