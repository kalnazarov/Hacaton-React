import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./style.css";
import HomeCard from "../HomeCard/HomeCard";
import { textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "Marvel",
        imgPath:
            "https://d2ofqe7l47306o.cloudfront.net/games/1920x1080/marvel-future-revolution-02.jpg",
        descr: "Откройте для себя мрачную изнанку вселенной Marvel в новой тактической ролевой игре, где под вашим началом будет сражаться Железный Человек, Росомаха, Капитан Америка, Призрачный Гонщик, Блэйд и другие герои",
        price: "3.52",
    },

    {
        label: "Рыцари Готэма",
        imgPath:
            "https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-s1-1920x1080-1920x1080-6b66ac601978.jpg?h=720&resize=1&w=1280",
        descr: "Получите Визионерский набор, чтобы расширить свои возможности. Он включает в себя эксклюзивную трансмогрификацию «Рыцарский дозор от Джима Ли», стиль для костюма «Из будущего», ресурсы, улучшенное снаряжение",
    },

    {
        label: "Fortnite",
        imgPath: "https://wallpaperaccess.com/full/38280.jpg",
        descr: "Собирайте друзей и отправляйтесь в игру Fortnite от Epic Games, в которой вас ждёт грандиозная битва для 100 игроков. В ней вам предстоит искать полезную добычу, добывать материалы, создавать предметы и отстреливаться от врагов",
    },
];

function Carousel() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box
            sx={{
                pt: "120px",
                pb: "50px",

                // height: "100%",
            }}
        >
            <Box
                sx={{
                    // maxWidth: 1000,
                    width: {
                        xs: "300px",
                        sm: "500px",
                        md: "600px",
                        lg: "800px",
                        xl: "1000px",
                    },

                    flexGrow: 1,
                }}
            >
                <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    sx={{
                                        display: "flex",

                                        alignItems: "end",
                                        maxWidth: 1000,
                                        overflow: "hidden",
                                        justifyContent: "center",

                                        // height: "500px",
                                        backgroundImage: `url(${step.imgPath})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "100% 100%",
                                        height: {
                                            xs: "150px",
                                            sm: "200px",
                                            md: "300px",
                                            lg: "400px",
                                            xl: "500px",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "80%",
                                        }}
                                    >
                                        <Box
                                            sx={{ pb: "20px", width: "1200px" }}
                                        >
                                            <Button
                                                sx={{
                                                    color: "black",
                                                    background: "white",
                                                    display: {
                                                        xs: "none",
                                                        sm: "none",
                                                        md: "none",
                                                        lg: "block",
                                                        xl: "block",
                                                    },
                                                }}
                                                onClick={() =>
                                                    navigate("/products")
                                                }
                                            >
                                                Купить сейчас
                                            </Button>
                                        </Box>
                                        <Box
                                            sx={{
                                                pb: "10px",
                                            }}
                                        ></Box>
                                    </Box>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Typography
                    sx={{
                        pt: "10px",
                        color: "white",
                        // backgroundImage: `url(${"https://cdn.eso.org/images/thumb700x/potw1428a.jpg"})`,
                        textAlign: "center",
                        backgroundColor: "#2a2a2a",
                        fontSize: "30px",
                        boxShadow: "-1px -1px 51px 11px rgba(255,255,255,0.75)",
                    }}
                >
                    {images[activeStep].label}
                </Typography>
                <MobileStepper
                    sx={{
                        // backgroundImage: `url(${"https://cdn.eso.org/images/thumb700x/potw1428a.jpg"})`,
                        backgroundColor: "#2a2a2a",
                    }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            sx={{ color: "white" }}
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            sx={{ color: "white" }}
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </Box>
    );
}

export default Carousel;
