import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Rating } from "@mui/material";
import { borderRadius } from "@mui/system";

let image = [
    {
        img: "https://cdn2.unrealengine.com/egs-runbleverse-season-2-breaker-1920x1080-f337f8c4ba5a.jpg?h=720&resize=1&w=1280",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        id: "2",
    },
    {
        img: "https://cdn2.unrealengine.com/egs-goatsimulator3--standardedition-offerlandscape-2560x1440-12c30a6f90cd.jpg?h=720&resize=1&w=1280",

        name: "Рыцари Готэма - Уже доступно",

        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: 26.99,
        id: "1",
    },

    {
        img: "https://cdn2.unrealengine.com/egs-fall-guys-spongebob-breaker-1920x1080-a5cc1a775560.jpg?h=720&resize=1&w=1280",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        id: "3",
    },
];

export default function HomeCard() {
    const [value, setValue] = React.useState(4);

    return (
        <Box sx={{ width: "90%", height: "100%" }}>
            <Card
                sx={{
                    backgroundColor: "rgb(18, 18, 18)",

                    height: "100%",
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "none",
                        xl: "flex",
                    },
                    justifyContent: "space-between",
                    borderRadius: "20px 20px",
                }}
            >
                {image.map((step, index) => (
                    <div key={index}>
                        <Box>
                            <img
                                style={{
                                    width: "475px",

                                    heidth: "350px",
                                    display: "flex",
                                }}
                                src={step.img}
                            />
                        </Box>
                    </div>
                ))}
            </Card>
        </Box>
    );
}
