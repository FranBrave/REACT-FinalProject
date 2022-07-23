import React, { useState } from "react";
import { Box } from "@mui/material";
import TravelsUsersContainer from "./components/TravelsUsersContainer/TravelsUsersContainer";
import SlidingButtons from "../../components/Toggle/SlidingButtons";

const values = ["Travels", "Users"];

const Home = () => {
    const [selectedComp, setSelectedComp] = useState(values[0]);

    const switchInfo = (value) => {
        setSelectedComp(value);
    };

    return (
        <Box>
            {/* <Toggle toggleDisplay={toggleDisplay} /> */}
            <SlidingButtons
                values={values}
                defaultSelected="Travels"
                switchInfo={switchInfo}
            />
            <TravelsUsersContainer selectedComp={selectedComp} />
        </Box>
    );
};

export default Home;
