import { Box } from "@mui/system";
import React from "react";
import Carousel from "../../pages/Carousel/Carousel";
import HomeFilter from "../../pages/filter/HomeFilter";
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
            <Box sx={{ display: "flex", justifyContent: "space-evenly",  }}>
                <Carousel />
                <HomeFilter />
            </Box>

            <HomeDetals />
        </Box>
    );
};

export default HomePage;
