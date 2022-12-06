import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useProducts } from "../../components/context/ProductContextProvaider";

export default function NativeSelectDemo() {
    const { fetchByParams } = useProducts();
    return (
        <Box
            sx={{
                display: "flex",
                minWidth: 120,
                marginLeft: {
                    xs: "30px",
                    sm: "30px",
                    md: "0",
                    lg: "15px",
                    xl: "0",
                },
            }}
        >
            <FormControl fullWidth>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    sx={{ color: "white" }}
                    color="success"
                >
                    Sort By Price
                </InputLabel>
                <NativeSelect
                    sx={{ color: "white" }}
                    onChange={(e) => fetchByParams("_sort", e.target.value)}
                    defaultValue={"1"}
                    color="success"
                    inputProps={{
                        name: "sort",
                    }}
                >
                    <option  value={"All"}>All</option>
                    <option value={"ASC"}>Low to High</option>
                    <option value={"DESC"}>High to Low</option>
                </NativeSelect>
            </FormControl>

            <FormControl  fullWidth>
                <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native"
                    color="success"
                    sx={{ color: "white" }}
                >
                    Sort By Type
                </InputLabel>
                <NativeSelect
                    sx={{ color: "white" }}
                    onChange={(e) => fetchByParams("type", e.target.value)}
                    defaultValue={"1"}
                    color="success"
                    inputProps={{
                        name: "sort",
                    }}
                >
                    <option value={"All"}>All</option>
                    <option value={"Action"}>Action</option>
                    <option value={"Horror"}>Horror</option>
                    <option value={"Shuter"}>Shuter</option>
                    <option value={"Race"}>Race</option>
                    <option value={"Adventure"}>Adventure</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
