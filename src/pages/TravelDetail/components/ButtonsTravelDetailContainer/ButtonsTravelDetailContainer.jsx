import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { setReduxUserDetail } from "../../../../state/redux/actions/userActions";

const ButtonsTravelDetailContainer = () => {

  

  const Join = () => {

  };

  const Follow = () => {};

  return (
    <Grid container spacing={4}>
      <Grid xs={2}>
        <Button variant="contained" onClick={Join}>
          <Typography>Join</Typography>
        </Button>
      </Grid>
      <Grid xs={2}>
      <Button variant = 'contained' onClick = {Follow}>
        <Typography>Follow</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsTravelDetailContainer;
