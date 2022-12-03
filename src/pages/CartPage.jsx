import React from "react";
import { useCart } from "../components/context/CartContextProvaider";
import { getCountProductsInCart } from "../helpers/functions";
import Cart from "./Cart";

const CartPage = () => {
    const { cart, addProductToCart } = useCart();

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setCount(getCountProductsInCart);
    }, [addProductToCart]);
    return (
        <div className="cartPage">
            <div className="headerBox">
                <h1 className="headerCart">Your Bag ({count})</h1>
            </div>
            <div className="cartBody">
                <div className="cart-left">
                    {" "}
                    <Cart />
                </div>
                <div className="cart-right">
                    {" "}
                    {/* <Order /> */}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
