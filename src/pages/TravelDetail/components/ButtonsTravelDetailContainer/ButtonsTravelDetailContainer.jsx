import React, { useEffect, useState } from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserDetail } from "../../../../state/redux/actions/userActions";
import { setReduxTravelDetail } from "../../../../state/redux/actions/travelActions";
import { useParams } from "react-router-dom";


const ButtonsTravelDetailContainer = () => {



  const {user} = useSelector((state) => state.user);
 
  //user
  
  const dispatchUser = useDispatch();

  useEffect(() => {
    dispatchUser(setReduxUserDetail());
  },[]);

  useEffect(() => {}, [user]);

  //travel
  
  const { id } = useParams();
  const BASEURL = "https://viajes-upgrade-hub.herokuapp.com";
  const TRAVELURL = "/travel/detail/";

  const [travel, setTravel] = useState();

  useEffect(() => {
    fetch(`${BASEURL}${TRAVELURL}${id}`)
      .then((response) => response.json())
      .then((data) => setTravel(data));
  }, [id]);

  console.log(travel)

  //usersFollowing

  


  const Join = () => {const 
    [usersWantJoin, setUsersWantJoin] = useState();
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
