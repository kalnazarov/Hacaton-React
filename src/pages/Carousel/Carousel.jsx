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


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
            "https://cdn2.unrealengine.com/egs-midnight-suns-carousel-desktop-1248x702-eea0532e8ea2.jpg?h=1080&resize=1&w=1920",
    },
    {
        label: "Bird",
        imgPath:
            "https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-s1-1920x1080-1920x1080-6b66ac601978.jpg?h=720&resize=1&w=1280",
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://cdn2.unrealengine.com/inspiration-marvels-spider-man-miles-morales-3840x2160-ba596ec24d23.jpg?h=480&resize=1&w=854",
    },
    {
        label: "sdfsdfsdf",
        imgPath:
            "https://www.egames.news/__export/1604687536822/sites/debate/img/2020/11/06/all_out_y_el_xlbum_del_grupo_kda_de_league_of_legends.jpg_242310155.jpg",
    },
    {
        label: "sdfsdf",
        imgPath:
            "https://cdn2.unrealengine.com/egs-warface-allodsteam-g2-01-1920x1080-dd83896256e8.jpg",
    },
];

function Carousel() {
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
                // display: "flex",
                // justifyContent: "space-evenly",
                pt: "100px",
                // pb: "50px",
               
            }}
        >
            <Box
                sx={{
                    maxWidth: 995,
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
                                    component="img"
                                    sx={{
                                        border: "2px solid white",
                                        height: 255,
                                        display: "block",
                                        maxWidth: 990,
                                        overflow: "hidden",
                                        width: "100%",
                                        height: "500px",
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
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
                <HomeCard />
            </Box>
        </Box>
    );
}

export default Carousel;
