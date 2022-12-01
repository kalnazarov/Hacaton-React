import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../context/AuthContextProvaider";
export default function Auth() {
    const navigate = useNavigate();
    const {
        email,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
    } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <div className="vse">
            <Box className="auth">
                <Container component="main" maxWidth="lg">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                mt: 8,
                                justifyContent: "center",
                                width: { xs: "90%", sm: "70%", md: "45%" },
                               
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "45px",
                                    fontFamily: "Quattrocento Sans",
                                    textAlign: "center",
                                    color: "rgb(47, 12, 12)",
                                }}
                                component="h1"
                                variant="h5"
                            >
                                Sign In
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 3 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "22px",
                                        fontFamily: "Quattrocento Sans",
                                        color: "rgb(47, 12, 12)",
                                    }}
                                >
                                    Email
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    helperText={emailError}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />

                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: "22px",
                                            fontFamily: "Quattrocento Sans",
                                            color: "rgb(47, 12, 12)",
                                        }}
                                    >
                                        Password
                                    </Typography>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText={passwordError}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mt: 1,
                                        }}
                                    >
                                        {" "}
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                        <Typography sx={{ fontSize: 14 }}>
                                            Remember me
                                        </Typography>
                                    </Box>
                                    <Link
                                        className="links"
                                        sx={{
                                            mt: 1,
                                            fontSize: 15,
                                            color: "black",
                                            fontSize: { xs: 14, sm: 16 },
                                        }}
                                        href="#"
                                        variant="body2"
                                        color="primary"
                                    >
                                        Forgot password?
                                    </Link>
                                </Box>
                                {hasAccount ? (
                                    <Button
                                        className="button_sign_in"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            fontWeight: 700,
                                            fontFamily: "Quattrocento Sans",
                                            fontSize: "20px",
                                            backgroundColor: "#ffc7ba",
                                        }}
                                        onClick={() => {
                                            handleLogin();
                                            navigate("/");
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                ) : (
                                    <Button
                                        className="button_register"
                                        type="submit"
                                        fullWidth
                                        variant="outlained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            fontWeight: 700,
                                            fontFamily: "Quattrocento Sans",
                                            fontSize: "20px",
                                            backgroundColor: "#ffc7ba",
                                        }}
                                        onClick={handleSignup}
                                    >
                                        Register
                                    </Button>
                                )}

                                <Grid
                                    container
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Grid item>
                                        {hasAccount ? (
                                            <Link
                                                className="links"
                                                sx={{ color: "black" }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {
                                                    "Don't have an account? Register now"
                                                }
                                            </Link>
                                        ) : (
                                            <Link
                                                className="links"
                                                sx={{ color: "black" }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {
                                                    "Already have an account? Log In"
                                                }
                                            </Link>
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}
