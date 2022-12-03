import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useProducts } from "../context/ProductContextProvaider";
import { useCart } from "../context/CartContextProvaider";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
                    {checkProductInCart(item.id) ? (
                        <Box onClick={() => addProductToCart(item)}>
                            <RemoveCircleOutlineIcon
                                sx={{ pb: "265px", pl: "160px" }}
                            />
                        </Box>
                    ) : (
                        <Box onClick={() => addProductToCart(item)}>
                            
                            <AddCircleOutlineIcon
                                sx={{ pb: "265px", pl: "160px" }}
                            />
                        </Box>
                    )}
                </Box>

                <Button
                    sx={{
                        backgroundColor: "gray",
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
                    onClick={() => navigate(`/products/${item.id}`)}
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
