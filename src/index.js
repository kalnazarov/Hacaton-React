import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import AuthContextProvider from "./components/context/AuthContextProvaider";
import ProductContextProvider from "./components/context/ProductContextProvaider";
import CartContextProvider from "./components/context/CartContextProvaider";
import NavabarContexts from "./components/context/NavbarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartContextProvider>
            <ProductContextProvider>
                <AuthContextProvider>
                    <NavabarContexts>
                        <App />
                    </NavabarContexts>
                </AuthContextProvider>
            </ProductContextProvider>
        </CartContextProvider>
    </BrowserRouter>
);
