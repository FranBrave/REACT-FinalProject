import React, {  useEffect, useState } from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useUserLoggedDetail } from "../../../../customHook/useUserLoggedDetail";
import { useUserDetail } from "../../../../customHook/useUserDetail";






const ButtonsTravelDetailContainer = () => {
  
  const BASEURL = "https://viajes-upgrade-hub.herokuapp.com";

  //user
  const userLogged = useUserLoggedDetail();

  
  
  //travel

  const { id } = useParams();
  const TRAVELURL = "/travel/detail/";

  const [travel, setTravel] = useState();

  useEffect(() => {
    fetch(`${BASEURL}${TRAVELURL}${id}`)
      .then((response) => response.json())
      .then((data) => setTravel(data));
  }, [id]);



  const INITIAL_STATE= {
    usersWantJoin: []
  }
  
 
  const Join = ({travel, userLogged})=> {
    const [userWantJoin, setUserWantJoin] = useState(INITIAL_STATE);
    

  };
    
   

  const Follow = (

  ) => {};

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
