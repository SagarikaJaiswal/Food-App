import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card.info.id}
            className="flex justify-between border-b-2"
          >
            <div className="w-9/12 m-2 p-2">
              <div className="font-bold text-lg">{item?.card?.info?.name}</div>
              <p className="mb-4">
                ₹
                {item?.card.info.price
                  ? item?.card.info.price / 100
                  : item?.card.info.defaultPrice / 100}
              </p>
              <p className="mb-4 text-sm">{item?.card.info.description}</p>
            </div>
            <div className="w-3/12 my-auto p-4 flex flex-col">
              <img
                src={CDN_URL + item?.card.info.imageId}
                className="rounded-lg"
              />
              <button
                className="m-2 p-2 rounded-lg bg-white shadow-lg border border-green-600 text-green-600"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
