import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Carousel from "../../pages/Carousel/Carousel";
import HomeFilter from "../../pages/filter/HomeFilter";
import HomeCard from "../../pages/HomeCard/HomeCard";
import HomeCard2 from "../../pages/HomeCard/HomeCard2";
import ProductList from "../../pages/ProductPage/ProductList";
import ProductsPage from "../../pages/ProductPage/ProductPage";
import { useProducts } from "../context/ProductContextProvaider";
import ProductCard from "../Products/ProductCard";

const HomePage = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",

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
                    <Carousel />
                </Box>
                
            </Box>
            <Box
                sx={{
                    backgroundColor: "rgb(18, 18, 18)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        pt: "50px",
                        pb: "50px",
                    }}
                >
                    <HomeCard />
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: "rgb(18, 18, 18)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        pt: "50px",
                        pb: "50px",
                        flexWrap: "wrap",

                    }}
                >
                    {products.slice(5, 15).map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: "rgb(18, 18, 18)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        pt: "50px",
                        pb: "50px",
                    }}
                >
                    <HomeCard2 />
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
