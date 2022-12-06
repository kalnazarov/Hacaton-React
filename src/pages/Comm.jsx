import * as React from "react";

import {
    Avatar,
    Box,
    Button,
    Divider,
    InputAdornment,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../components/context/ProductContextProvaider";
import ProductCard from "../components/Products/ProductCard";
import ProductDetails from "./ProductDetails";
import { useAuth } from "../components/context/AuthContextProvaider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";
import { ADMIN } from "../helpers/const";
import { AccountCircle } from "@mui/icons-material";

export default function Comm() {
    const { productDetails, saveEditedProduct, getProductDetails } =
        useProducts();
    const navigate = useNavigate();
    const [com, setCom] = React.useState({ commit: "" });
    const { id } = useParams();
    const {
        user: { email },
    } = useAuth();
    function delCommit() {
        let obj = { ...productDetails, commit: "" };
        setCom(obj);
        saveEditedProduct(obj, productDetails.id);
    }

    // console.log(productDetails);

    const [newCom, setNewCom] = React.useState({ ...productDetails.commit });

    const handleInp = (e) => {
        let obj = { ...productDetails, [e.target.name]: e.target.value };
        setCom(obj);
    };
    useEffect(() => {
        getProductDetails(id);
    }, [com]);

    return (
        <Box>
            <List sx={{ width: "100%" }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="anton777@mail.ru"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="gray"
                                >
                                    {
                                        "Какие языки поддерживает Epic Games Store?"
                                    }
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="salamat95@mail.ru"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="gray"
                                >
                                    {
                                        "Могу ли я опробовать игру перед покупкой?"
                                    }
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar
                            alt="Cindy Baker"
                            src="/static/images/avatar/3.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="abas01@mail.ru"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="Gray"
                                >
                                    {
                                        "Мне досталась бесплатная игра, но я не вижу её в своей учётной записи. Почему?"
                                    }
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>

            {productDetails.commit ? (
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            <React.Fragment>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="Gray"
                                    >
                                        {productDetails.commit}
                                    </Typography>
                                    <Button
                                        sx={{ color: "gray" }}
                                        onClick={() => delCommit()}
                                    >
                                        Удалить
                                    </Button>
                                </Box>
                            </React.Fragment>
                        }
                    >
                        {email}
                    </ListItemText>
                </ListItem>
            ) : (
                <></>
            )}

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                    sx={{
                        backgroundColor: "white",
                        height: "40px",
                        width: "500px",
                        borderRadius: "5px",
                    }}
                    onChange={handleInp}
                    fullWidth
                    label="Написать комментарий"
                    variant="outlined"
                    name="commit"
                    size="small"
                    value={com.commit}
                />

                {newCom.length == 0 ? (
                    <Button
                        onClick={async () => {
                            await saveEditedProduct(com, id);
                            getProductDetails(id);
                            setCom({ commit: "" });
                        }}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "green",
                            color: "white",
                            transition: "1000s",
                            width: "300px",
                            height: "40px",
                        }}
                        fullWidth
                        size="large"
                    >
                        Изменить комментарий
                    </Button>
                ) : (
                    <Button
                        onClick={async () => {
                            await saveEditedProduct(com, id);
                            getProductDetails(id);
                            setCom({ commit: "" });
                            setNewCom(productDetails.commit);
                        }}
                        sx={{
                            borderColor: "black",
                            backgroundColor: "green",
                            color: "white",
                            transition: "1000s",
                            width: "300px",
                            height: "40px",
                        }}
                        fullWidth
                        size="large"
                    >
                        Добавить комментарий
                    </Button>
                )}
            </Box>
        </Box>
    );
}
