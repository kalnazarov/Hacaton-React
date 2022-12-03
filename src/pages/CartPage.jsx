import { Box, height } from "@mui/system";
import React from "react";
import { useCart } from "../components/context/CartContextProvaider";
import { getCountProductsInCart } from "../helpers/functions";
import Cart from "./Cart";

const CartPage = () => {



   
    return (
        <div
            style={{
                backgroundColor: "rgb(18, 18, 18)",
                display: 'flex', justifyContent:'center',
                width: "100%",
                height: "100%",
                
            }}
        >
            <Cart />
        </div>
    );
};

export default CartPage;
