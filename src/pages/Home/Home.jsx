import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="start"
        gap="1rem"
      >
        <SlidingButtons
          values={values}
          defaultSelected="Travels"
          switchInfo={switchInfo}
          home={true}
        />
      </Grid>
      <TravelsUsersContainer selectedComp={selectedComp} />
    </Box>
  );
};

export default Home;
