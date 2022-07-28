import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useUserLoggedDetail } from "../../../../customHook/useUserLoggedDetail";
import { useDispatch } from "react-redux";
import {
  setReduxUserFollow,
  setReduxUserWantJoin,
} from "../../../../state/redux/actions/travelActions";

const ButtonsTravelDetailContainer = ({ travel }) => {
  //travel id
  const userLogged = useUserLoggedDetail();
  const dispatch = useDispatch();

  const addUserToWantJoinList = () => {
    const data = {
      userName: userLogged.username,
      travelId: travel.id,
    };

    dispatch(setReduxUserWantJoin(data));
  };


  const filtrar = (list) => {
    if (list.length === 0) {return true}
    if(list.length > 0){
      let value = false;
      for (let i = 0; i < list.length; i++) {
        if (!list[i]._id === userLogged._id) {
          value = true;
          break;
        } 
    }
    console.log(value)
    return value;
    }};

  const addUserToFollowList = () => {
    const data = {
      userName: userLogged.username,
      travelId: travel.id,
    };

    dispatch(setReduxUserFollow(data, travel.usersFollowing));
  };

  console.log(travel,2)

  return (
    <Grid container spacing={4}>
      <Grid xs={2}>
            {userLogged && filtrar(travel.usersWantJoin) && (
            <Button variant="contained" onClick={addUserToWantJoinList}>
              <Typography>Join</Typography>
            </Button>
          )}
      </Grid>
      <Grid xs={2}>
        {userLogged && filtrar(travel.usersFollowing) && (
          <Button variant="contained" onClick={addUserToFollowList}>
            <Typography>Follow</Typography>
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ButtonsTravelDetailContainer;
