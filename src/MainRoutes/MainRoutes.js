import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../components/context/AuthContextProvaider";
import HomePage from "../components/homePage/HomePage";
import { ADMIN } from "../helpers/const";
import AdminPage from "../pages/AdminPage/AdminPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import EditProductPage from "../pages/ProductPage/EditProductPage";
import ProductsPage from "../pages/ProductPage/ProductPage";
import VoprosPage from "../pages/VoprosPage";

const MainRoutes = () => {
    const { user } = useAuth();

    const PUBLIC_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        { link: "/products", element: <ProductsPage />, id: 3 },
        { link: "/product/:id", element: <ProductDetailsPage />, id: 5 },
        { link: "/cart", element: <CartPage />, id: 10 },
        { link: "/vopros", element: <VoprosPage />, id: 20 },
    ];
    const PRIVATE_ROUTES = [
        { link: "/edit/:id", element: <EditProductPage />, id: 7 },
        { link: "/admin", element: <AdminPage />, id: 3 },
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
                {user
                    ? PRIVATE_ROUTES.map((item) => (
                          <Route
                              key={item.id}
                              path={item.link}
                              element={
                                  user.email === ADMIN ? (
                                      item.element
                                  ) : (
                                      <Navigate replace to="*" />
                                  )
                              }
                          />
                      ))
                    : null}
            </Routes>
        </>
        // <Box></Box>
    );
};
export default MainRoutes;
