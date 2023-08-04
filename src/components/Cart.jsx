import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-lg m-4 p-4">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearItems}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Cart is empty. Add items to your cart!</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
