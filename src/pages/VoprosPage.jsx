import React from "react";
import Vopros from "./Vopros";

const VoprosPage = () => {
    return (
        <div
            style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Vopros/>
        </div>
    );
};

export default VoprosPage;
