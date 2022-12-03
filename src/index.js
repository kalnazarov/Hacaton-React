import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import AuthContextProvider from "./components/context/AuthContextProvaider";
import ProductContextProvider from "./components/context/ProductContextProvaider";
import CartContextProvider from "./components/context/CartContextProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartContextProvider>
            <ProductContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </ProductContextProvider>
        </CartContextProvider>
    </BrowserRouter>
);
