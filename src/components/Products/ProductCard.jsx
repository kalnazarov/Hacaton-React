import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import zIndex from "@mui/material/styles/zIndex";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    // function handle(e) {
    //     changeBackground(e);
    // }

    // const changeBackground = (e) => {
    //     e.target.style.display = "flex";
    // };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                pt: "100px",

                width: {
                    xs: "45%",
                    sm: "45%",
                    md: "31%",
                    lg: "31%",
                    xl: "15%",
                },
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box
                sx={{
                    backgroundImage: `url(${item.picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "end",
                    backgroundColor: hover ? "green" : "red",
                   
                }}
            >
                <Box
                    sx={{
                        position: "absolute",

                        display: hover ? "block" : "none",
                        color: "white",
                    }}
                >
                    <AddCircleOutlineIcon sx={{ pb: "265px", pl: "160px" }} />
                </Box>

                <Button
                    sx={{
                        backgroundColor: "#3399ff",
                        width: "50%",
                        color: "white",
                        marginTop: "130%",
                        marginBottom: "5%",
                        fontWeight: "800",
                        fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                            xl: "10px",
                        },
                    }}
                >
                    Buy
                </Button>
            </Box>
            <Typography
                sx={{
                    // fontWeight: '600',
                    marginTop: "13px",
                    width: "100%",
                    textAlign: "left",
                    color: "white",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                        xl: "16px",
                    },
                }}
            >
                {item.name}
            </Typography>
            <Typography
                sx={{
                    fontWeight: "500",
                    marginBottom: "10%",
                    color: "gray",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                        xl: "19px",
                    },
                }}
            >
                ${item.price}
            </Typography>
        </Box>
    );
};

export default ProductCard;
