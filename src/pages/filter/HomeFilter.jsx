import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

export default function HomeFilter() {
    return (
        <Box
            sx={{
                width: "15%",
                pt: "100px",
               
            }}
        >
            <Accordion
                sx={{
                    backgroundColor: "transparent",
                    color: "white",
                }}
            >
                <AccordionSummary
                    sx={{ color: "white" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Цена</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        
                        
                    }}
                >
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Бесплатно
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        10$
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        20$
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        30$
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        50$
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Жанр</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        fontSize: "12px",
                    }}
                >
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Гонки
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Стратегия
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Файтинг
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Экшен
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Шутер
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Хоррор
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Жанр</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        fontSize: "12px",
                    }}
                >
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Гонки
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Стратегия
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Файтинг
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Экшен
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Шутер
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Хоррор
                    </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "transparent", color: "white" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Жанр</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        fontSize: "12px",
                    }}
                >
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Гонки
                    </Button>
                    <Button sx={{ color: "white", fontSize: "15px" }}>
                        Стратегия
                    </Button>
                    
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
