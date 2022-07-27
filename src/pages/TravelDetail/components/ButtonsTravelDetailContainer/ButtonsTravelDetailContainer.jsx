import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useUserLoggedDetail } from "../../../../customHook/useUserLoggedDetail";
import { useDispatch } from "react-redux";
import { setReduxUserFollow, setReduxUserWantJoin } from "../../../../state/redux/actions/travelActions";

const ButtonsTravelDetailContainer = ({ travel }) => {
    //travel id
    
    const userLogged = useUserLoggedDetail();
    const dispatch = useDispatch();

    const addUserToWantJoinList = () => {
        const data = {
            userName: userLogged.username,
            travelId: travel.id,
        };

        dispatch(setReduxUserWantJoin(data, travel.usersWantJoin));
    };

    const addUserToFollowList = () => {
      const data = {
        userName: userLogged.username, 
        travelId: travel.id,
      }

      dispatch(setReduxUserFollow(data, travel.usersFollowing))
    };

    return (
        <Grid container spacing={4}>
            <Grid xs={2}>
                <Button variant="contained" onClick={addUserToWantJoinList}>
                    <Typography>Join</Typography>
                </Button>
            </Grid>
            <Grid xs={2}>
                <Button variant="contained" onClick={addUserToFollowList}>
                    <Typography>Follow</Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

export default ButtonsTravelDetailContainer;
