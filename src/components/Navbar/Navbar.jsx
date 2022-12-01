import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useAuth } from "../context/AuthContextProvaider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const pages = ["Главная", "Все игры", "Новости"];

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Navbar() {
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#2a2a2a", width: "100%" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <img
                            style={{ width: "40px", height: "40px" }}
                            src="https://seeklogo.com/images/E/epic-games-logo-A9D86272DC-seeklogo.com.png"
                            alt=""
                        />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Box display={"flex"}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => navigate("/")}> 
                                    Главная
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => navigate("/products")}> 
                                    Все игры
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    О нас
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                            <IconButton>
                                <ShoppingCartCheckoutIcon
                                    sx={{ color: "white" }}
                                />
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            ></IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {email ? (
                            <MenuItem onClick={handleLogout}>
                                <Typography
                                    sx={{ textAlign: "center", color: "white" }}
                                >
                                    Logout
                                </Typography>
                                <AccountCircle sx={{ color: "white" }} />
                            </MenuItem>
                        ) : (
                            <Link
                                to="/auth"
                                style={{
                                    textDecoration: "none ",
                                    color: "black",
                                }}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            color: "white",
                                        }}
                                    >
                                        Login
                                    </Typography>
                                    <AccountCircle sx={{ color: "white" }} />
                                </MenuItem>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
