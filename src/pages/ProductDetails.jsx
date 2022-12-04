import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import React, { useState } from "react";
import { useEffect } from "react";
import { useLinkClickHandler, useNavigate, useParams } from "react-router-dom";

import { Button, CardContent, Grid } from "@mui/material";
import { useAuth } from "../components/context/AuthContextProvaider";
import { useProducts } from "../components/context/ProductContextProvaider";
import { ADMIN } from "../helpers/const";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import Comm from "./Comm";
import { useCart } from "../components/context/CartContextProvaider";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import AppleIcon from "@mui/icons-material/Apple";

const ProductDetails = () => {
    const { addProductToCart, checkProductInCart } = useCart();
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
    const { getProductDetails, productDetails, deleteProduct } = useProducts();
    const { id } = useParams();
    useEffect(() => {
        getProductDetails(id);
    }, []);

    const {
        user: { email },
    } = useAuth();

    let sizes = [
        7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21,
    ];

    const [size, setSize] = useState();

    function sizesIndex(item) {
        setSize(item);
        changeColor(item);
    }

    const LiItems = [
        "leather / textile / synthetic",
        "embossed FILA logos on tongue, quarter, and instep",
        "embossed FILA basketball logo on adjustable heel strap",
        "perforated and reflective detailing on eyerow",
        "embossed detailing on sidewall",
        "cushioned heel collar and mesh tongue",
        "adjustable heel strap",
    ];

    const [color, setColor] = useState(false);
    function changeColor() {
        setColor((prev) => !prev);
    }

    return (
        <Box sx={{ width: "80%", pt: "110px", pb: "80px", color: "white" }}>
            <Typography variant="h3" sx={{ color: "white", pb: "10px" }}>
                {productDetails.name}
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ width: "60%" }}>
                    <iframe
                        width="100%"
                        height="490"
                        src={productDetails.video}
                    ></iframe>

                    <Typography
                        variant="h3"
                        sx={{ textAlign: "center", color: "gray" }}
                    >
                        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                    </Typography>
                    <Comm />

                    <p
                        style={{
                            height: "150px",
                            fontSize: "22px",
                            fontFamily: "Inter,sans-serif",
                            lineHeight: "30px",
                            // textAlign: "center",
                        }}
                    >
                        {productDetails.description} <BoltSharpIcon />
                    </p>
                </Box>
                <Box sx={{ width: "20%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "6px",
                        }}
                    >
                        <img
                            style={{ width: "90%", height: "320px" }}
                            src={productDetails.picture}
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "11px",
                            pb: "10px",
                        }}
                    >
                        <Button
                            sx={{
                                color: "rgb(245, 245, 245)",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                width: "150px",
                                height: "30px",
                                fontSize: "11px",
                            }}
                        >
                            Базовая игра
                        </Button>
                        <Typography sx={{ pr: "10px", color: "white" }}>
                            {productDetails.price}.99 $
                        </Typography>
                    </Box>
                    <Box sx={{ pb: "10px" }}>
                        <Button
                            sx={{
                                color: "white",
                                backgroundColor: "green",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Купить Сейчас
                        </Button>
                    </Box>
                    {checkProductInCart(productDetails.id) ? (
                        <Button
                            variant="contained"
                            onClick={() => navigate("/cart")}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Посмотреть в корзине
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => addProductToCart(productDetails)}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Добавить в корзину
                        </Button>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Издатель
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            Epic Games
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Разработчик
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            kalnazarov_
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Платформа
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            <WindowRoundedIcon sx={{ color: "white" }} />
                            <AppleIcon sx={{ color: "white" }} />
                        </Typography>
                    </Box>
                    <Box sx={{ pt: "10px" }}>
                        <Button
                            variant="contained"
                            onClick={() => setLike(!like)}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "40px",
                                fontSize: "30px",
                            }}
                        >
                            {like ? "❤️" : " 💔"}
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* <Grid
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }}
                >
                    <Button
                        onClick={() => navigate(`/products`)}
                        variant="contained"
                        sx={{
                            color: "white",
                            backgroundColor: "#0a203f",
                            width: "100px",
                            height: "50px",
                        }}
                    >
                        Disabled
                    </Button>

                    {email === ADMIN ? (
                        <>
                            <Button
                                onClick={() => navigate(`/edit/${id}`)}
                                variant="contained"
                                sx={{
                                    color: "black",
                                    backgroundColor: "whitesmoke",
                                    width: "100px",
                                    height: "50px",
                                }}
                            >
                                EDIT
                            </Button>

                            <Button
                                onClick={() => {
                                    deleteProduct(id);
                                    navigate(`/products`);
                                }}
                                variant="contained"
                                sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    width: "100px",
                                    height: "50px",
                                }}
                            >
                                DELETE
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                </Grid> */}

            {/* <Box
                    sx={{
                        width: "40%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <CardContent
                        sx={{
                            width: "100%",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        <Typography sx={{ fontSize: "25px", color: "green" }}>
                            ${productDetails.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {productDetails.description}
                        </Typography>
                    </CardContent>

                    <Box sx={{ width: "50%" }}>
                        <Box
                            sx={{ display: "flex", justifyContent: "start" }}
                            className="sizes__top"
                        >
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "rgb(46, 44, 44)",
                                }}
                            >
                                Size Guide {size}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgb(46, 44, 44)",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    borderBottom: "1px solid rgb(46, 44, 44)",
                                }}
                            ></Typography>
                        </Box> */}

            {/* <Box>
                        <Box sx={{ width: "100%" }}>
                            <Accordion sx={{ width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontWeight: "700" }}>
                                        Features & Specs
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        {LiItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "20px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "gray",
                                    }}
                                >
                                    <AirportShuttleIcon />
                                    Free Shipping & Easy Returns
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "gray",
                                    }}
                                >
                                    <PaymentIcon />
                                    Multiple Payment Options <HelpOutlineIcon />
                                </Typography>
                                <Typography
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                ></Typography>
                            </Box>
                        </Box>
                    </Box> */}
        </Box>
    );
};

export default ProductDetails;
