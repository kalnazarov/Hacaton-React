import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useProducts } from "../context/ProductContextProvaider";
import { useCart } from "../context/CartContextProvaider";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ProductSortPagination from "../../pages/ProductPage/ProductSortPogination";
import HomeCard from "../../pages/HomeCard/HomeCard";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    // console.log(item);
    const { addProductToCart, checkProductInCart, deleteCartProduct } =
        useCart();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                // alignItems:'center',

                width: {
                    xs: "60%",
                    sm: "45%",
                    md: "30%",
                    lg: "22%",
                    xl: "17%",
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
                    borderRadius: "20px",
                    backgroundSize:'100% 100%',
                }}
            >
                <Box
                    sx={{
                        position: "absolute",

                        display: hover ? "block" : "none",
                        color: "white",
                    }}
                >
                    {checkProductInCart(item.id) ? (
                        <Box onClick={() => addProductToCart(item)}>
                            <RemoveCircleOutlineIcon
                                sx={{ pb: "260px", pl: "160px" }}
                            />
                        </Box>
                    ) : (
                        <Box onClick={() => addProductToCart(item)}>
                            <AddCircleOutlineIcon
                                sx={{ pb: "260px", pl: "160px" }}
                            />
                        </Box>
                    )}
                </Box>

                <Button
                    sx={{
                        backgroundColor: "green",
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
                    onClick={() => navigate(`/product/${item.id}`)}
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
