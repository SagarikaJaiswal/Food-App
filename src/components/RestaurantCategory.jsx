import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({
  data,
  setShowItems,
  setIsActive,
  isActive,
  showItems,
  setItemIndex,
}) => {
  const { title, itemCards } = data?.card?.card;
  //const [showItems, setShowItems] = useState(false);
  //const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setItemIndex();
    // setShowItems();
    // setIsActive();
  };
  return (
    <div>
      <div className="my-4 p-2 accordion w-[700px]  bg-white rounded-lg shadow-lg">
        <div
          className="accordion-title flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="m-2 p-2 font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span className="m-2 p-2 font-bold">{isActive ? "-" : "+"}</span>
        </div>
        <div>{showItems && <ItemsList items={itemCards}></ItemsList>}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
