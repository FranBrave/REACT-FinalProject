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
        console.log(1);
        const data = {
            userName: userLogged.username,
            travelId: travel.id,
        };

        dispatch(setReduxUserWantJoin(data));
    };

    const addUserToFollowList = () => {
        console.log(1);
        const data = {
            userName: userLogged.username,
            travelId: travel.id,
        };

        dispatch(setReduxUserFollow(data, travel.usersFollowing));
    };

    const filtrar = (list) => {
        if (list.length === 0) {
            return true;
        }

        if (list.length > 0) {
            let value = false;

            for (let i = 0; i < list.length; i++) {
                if (!list[i]._id === userLogged._id) {
                    value = true;

                    break;
                }
            }

            console.log(value);

            return value;
        }
    };

    console.log(travel);

    return (
        <Grid container>
            <Grid container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justifyContent="start"
                                gap="1rem">
                {userLogged &&
                    userLogged._id !== travel.userOwnerId &&
                    filtrar(travel.usersWantJoin) && (
                        <Button
                            variant="contained"
                            onClick={addUserToWantJoinList}
                        >
                            <Typography>Join</Typography>
                        </Button>
                    )}
            
                {userLogged &&
                    userLogged._id !== travel.userOwnerId &&
                    filtrar(travel.usersFollowing) && (
                        <Button
                            variant="contained"
                            onClick={addUserToFollowList}
                        >
                            <Typography>Follow</Typography>
                        </Button>
                    )}
            </Grid>
        </Grid>
    );
};

export default ButtonsTravelDetailContainer;
