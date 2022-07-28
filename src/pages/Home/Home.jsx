import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TravelsUsersContainer from "./components/TravelsUsersContainer/TravelsUsersContainer";
import SlidingButtons from "../../components/slidingButtons/SlidingButtons";

const values = ["Travels", "Users"];
const valuesESP = ["Viajes", "Usuarios"];

const Home = () => {
  const [selectedComp, setSelectedComp] = useState(values[0]);

  const switchInfo = (value) => {
    setSelectedComp(values[valuesESP.indexOf(value)]);
  };

  return (
    <Box className="home">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="start"
        gap="1rem"
        marginBottom="5rem"
      >
        <SlidingButtons
          values={valuesESP}
          defaultSelected="Viajes"
          switchInfo={switchInfo}
          home={true}
        />
      </Grid>
      <TravelsUsersContainer selectedComp={selectedComp} />
    </Box>
  );
};

export default Home;
