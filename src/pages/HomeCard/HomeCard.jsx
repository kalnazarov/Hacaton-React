import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Rating } from "@mui/material";
import { borderRadius } from "@mui/system";

let image = [
    {
        img: "https://cdn2.unrealengine.com/egs-gothamknights-warnerbrosgamesmontreal-s1-1920x1080-1920x1080-6b66ac601978.jpg?h=720&resize=1&w=1280",
        name: "Рыцари Готэма - Уже доступно",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: 26.99,
    },
    {
        img: "https://cdn2.unrealengine.com/egs-runbleverse-season-2-breaker-1920x1080-f337f8c4ba5a.jpg?h=720&resize=1&w=1280",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
    },
];

export default function HomeCard() {
    const [value, setValue] = React.useState(4);

    return (
        <Box sx={{ maxWidth: "100%", mt: "50px" }}>
            <Box
                sx={{
                    "& > legend": { mt: 4 },
                }}
            ></Box>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                   

                    backgroundColor: "transparent",

                   
                }}
            >
                {image.map((step) => (
                    <div>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: "100%",
                                overflow: "hidden",

                                height: "50%",
                                borderRadius: "10px",
                                border: "2px solid white",
                            }}
                            src={step.img}
                        />

                        <CardActionArea
                            sx={{
                                height: "40%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "95%",
                                color: "white",
                                textShadow:
                                    " 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em gray",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {step.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        textShadow:
                                            " 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em gray",
                                        color: "gray",
                                    }}
                                >
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
                                        justifyContent: "space-around",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            color: "white",
                                            backgroundColor: "gray",
                                        }}
                                    >
                                        Buy
                                    </Button>
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
