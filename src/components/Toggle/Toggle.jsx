import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import SlidingButtons from "./SlidingButtons";
import GalleryImages from "../../pages/UserDetail/components/galleryImages/GalleryImages";
import UsersContainer from "../../pages/Home/components/TravelsUsersContainer/components/UsersContainer/UsersContainer";

const values = ["Travels", "Users"];

const Toggle = () => {
  const [selectedComp, setSelectedComp] = useState(values[0]);
  const switchInfo = (value) => {
    setSelectedComp(value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
    >
      <SlidingButtons
        values={values}
        defaultSelected={"Viajes"}
        switchInfo={switchInfo}
      />
    </Grid>
  );
};

export default Toggle;
