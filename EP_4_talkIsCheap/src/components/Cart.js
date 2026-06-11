import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="m-2 p-2 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
                {(cartItems.length===0)?"Cart is empty. Add items to the cart!":<ItemList items={cartItems} />}
            </div>
        </div>
    )
}

export default Cart;