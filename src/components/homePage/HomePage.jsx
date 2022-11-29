import { Box } from "@mui/system";
import React from "react";
import Carousel from "../../pages/Carousel/Carousel";
import HomeDetals from "../../pages/HomeCard/HomeCard";

const HomePage = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${"https://mobimg.b-cdn.net/v3/fetch/ec/ecc8608ebb9732b0a74cc79493f1a31f.jpeg"})`,
            }}
        >
            <Carousel />
            <HomeDetals />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            placeat a molestias, voluptate reprehenderit ex laudantium totam
            aspernatur assumenda consequuntur, ullam eligendi eveniet ab
            cupiditate dolores natus officiis ipsa repellat qui dolorem eum rem,
            ea error dolor. Ab quos libero unde, molestias aspernatur quidem,
            accusantium quae aut minus, delectus iste.
        </Box>
    );
};

export default HomePage;
