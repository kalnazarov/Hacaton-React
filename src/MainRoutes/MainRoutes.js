import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProductsPage from "../pages/ProductPage/ProductPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        {
            link: "/products",
            element: <ProductsPage />,
            id: 3,
        },
    ];

    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        key={item.id}
                        path={item.link}
                        element={item.element}
                    />
                ))}
            </Routes>
        </>
    );
};
export default MainRoutes;
