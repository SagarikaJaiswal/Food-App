import "../../index.css";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  //console.log(props);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[400px] bg-gray-200 rounded-lg hover:bg-gray-300 flex flex-col flex-wrap">
      <img
        className="res-logo rounded-lg "
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>₹ {costForTwo / 100} for two</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
