import { Box } from "@mui/system";
import React from "react";
import Carousel from "../../pages/Carousel/Carousel";
import HomeFilter from "../../pages/filter/HomeFilter";
import ProductList from "../../pages/ProductPage/ProductList";
import ProductsPage from "../../pages/ProductPage/ProductPage";

const HomePage = () => {
    return (
        <Box
            sx={{
                width: "100%",

                // backgroundColor:'rgb(18, 18, 18)'
                backgroundImage: `url(${"https://mobimg.b-cdn.net/v3/fetch/ec/ecc8608ebb9732b0a74cc79493f1a31f.jpeg"})`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <Box>
                    <Carousel  />
                </Box>
                <Box>
                    <HomeFilter />
                </Box>
            </Box>
            <ProductsPage />
        </Box>
    );
};

export default HomePage;
