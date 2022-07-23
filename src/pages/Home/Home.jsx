import React, { useState } from "react";
import { Box } from "@mui/material";
import TravelsUsersContainer from "./components/TravelsUsersContainer/TravelsUsersContainer";
import SlidingButtons from "../../components/slidingButtons/SlidingButtons";

const values = ["Travels", "Users"];

const Home = () => {
    const [selectedComp, setSelectedComp] = useState(values[0]);

    const switchInfo = (value) => {
        setSelectedComp(value);
    };

    return (
        <Box>
            <SlidingButtons
                values={values}
                defaultSelected="Travels"
                switchInfo={switchInfo}
                home={true}
            />
            <TravelsUsersContainer selectedComp={selectedComp} />
        </Box>
    );
};

export default Home;
