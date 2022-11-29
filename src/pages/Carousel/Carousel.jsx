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
            "https://cdn2.unrealengine.com/egs-fall-guys-season-3-carousel-desktop-1248x702-45e1348ce06e.jpg?h=1080&resize=1&w=1920",
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://cdn2.unrealengine.com/key-art-1920x1080-3251a6ec218c.jpg",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-hunted-primary-thumbnail.jpg.adapt.crop191x100.628p.jpg",
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
                display: "flex",
                justifyContent: "space-evenly",
                pt: "100px",
            }}
        >
            <Box
                sx={{
                    maxWidth: 800,
                    flexGrow: 1,
                    boxShadow: "-1px -1px 51px 11px rgba(255,255,255,0.75)",
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
                                        height: 255,
                                        display: "block",
                                        maxWidth: 800,
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
                        backgroundImage: `url(${"https://cdn.eso.org/images/thumb700x/potw1428a.jpg"})`,
                        textAlign: "center",
                        fontSize: "30px",
                    }}
                >
                    {images[activeStep].label}
                </Typography>
                <MobileStepper
                    sx={{
                        backgroundImage: `url(${"https://cdn.eso.org/images/thumb700x/potw1428a.jpg"})`,
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
            <Box sx={{ width: "40%", color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ipsa explicabo aspernatur porro laborum ut quam aliquid
                recusandae tempore. Similique molestiae nesciunt perspiciatis
                consequuntur ad magnam doloremque ipsam! Ut iste perferendis
                inventore. Cumque sit eos vitae at neque debitis, recusandae
                consectetur. Provident, voluptas impedit repellendus eveniet
                odit rem harum maxime!
            </Box>
        </Box>
    );
}

export default Carousel;
