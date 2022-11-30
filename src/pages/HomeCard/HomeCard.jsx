import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Rating } from "@mui/material";
import { borderRadius } from "@mui/system";

let image = [
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsadas",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsad",
        decription: "bbbbbb",
        price: 313,
    },
    {
        img: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
        name: "asdasdasdsadas",
        decription: "bbbbbb",
        price: 313,
    }
];

export default function HomeCard() {
    const [value, setValue] = React.useState(2);

    return (
        <Box>
            <Box
                sx={{
                    "& > legend": { mt: 2 },
                }}
            ></Box>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",

                    flexWrap: "wrap",
                    pt: "50px",
                    backgroundColor: "black",

                    // backgroundImage: `url(${"https://mobimg.b-cdn.net/v3/fetch/ec/ecc8608ebb9732b0a74cc79493f1a31f.jpeg"})`,
                }}
            >
                {image.map((step) => (
                    <div>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                                overflow: "hidden",

                                height: "250px",
                                borderRadius: "10px",
                            }}
                            src={step.img}
                        />

                        <CardActionArea
                            sx={{
                                height: "100px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                >
                                    {step.name}
                                </Typography>

                                <Typography sx={{ fontSize: "15px" }}>
                                    {step.decription}
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <Button>Buy</Button>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        ${step.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </div>
                ))}
            </Card>
        </Box>
    );
}
