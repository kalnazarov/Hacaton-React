import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [{ link: "/", element: <HomePage />, id: 1 }];

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
