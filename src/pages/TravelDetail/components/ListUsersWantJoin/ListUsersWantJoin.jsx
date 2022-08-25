import {
    FormControl,
    InputLabel,
    Box,
    Select,
    MenuItem,
    Typography,
    Button,
    Grid,
    Stack,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    setReduxUserJoined,
    setReduxUserWantJoinDelete,
} from "../../../../state/redux/actions/travelActions";

const INITIAL_STATE = "";

const ListUsersWantJoin = ({ travel }) => {
    const dispatch = useDispatch();
    const [userSelected, setUserSelected] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        setUserSelected(event.target.value);
    };

    const acceptUser = () => {
        const data = {
            username: userSelected,
            travelId: travel.id,
        };
        dispatch(setReduxUserJoined(data));
        denieUser();
    };

    const denieUser = () => {
        const data = {
            userName: userSelected,
            travelId: travel.id,
        };
        dispatch(setReduxUserWantJoinDelete(data));
    };

    return (
        <Box>
            {travel ? (
                <Grid sx={{ direction: "column" }}>
                    <FormControl fullWidth>
                        <InputLabel> Users Want Join</InputLabel>
                        <Select
                            label="User"
                            value={userSelected}
                            onChange={handleChange}
                        >
                            {travel.usersWantJoin.map((user) => {
                                return (
                                    <MenuItem value={user.username}>
                                        {user.username}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    {userSelected && (
                        <Stack sx={{ direction: "row" }}>
                            <Link to={`/User/${userSelected}`}>
                                <Button sx={{
            bgcolor: "#fabada6e",
            color: "#000",
            textTransform: "none",
            width: { lg: "175px", xs: "45px" },
            fontSize: { lg: "20px", xs: "0px" },
            height: { lg: "56px", xs: "40px" },
            right: "0",
            m: "5px",
          }}>Ver Perfil</Button>
                            </Link>
                            <Button 
                            onClick={acceptUser}
                            sx={{
            bgcolor: "#3bb945e7",
            color: "#000",
            textTransform: "none",
            width: { lg: "175px", xs: "45px" },
            fontSize: { lg: "20px", xs: "0px" },
            height: { lg: "56px", xs: "40px" },
            right: "0",
            m: "5px",
          }}
                            >Aceptar</Button>
                            <Button onClick={denieUser}
                            sx={{
            bgcolor: "#F0A370",
            color: "#000",
            textTransform: "none",
            width: { lg: "175px", xs: "45px" },
            fontSize: { lg: "20px", xs: "0px" },
            height: { lg: "56px", xs: "40px" },
            right: "0",
            m: "5px",
          }}>Denegar</Button>
                        </Stack>
                    )}
                </Grid>
            ) : (
                <Typography>Loading</Typography>
            )}
        </Box>
    );
};

export default ListUsersWantJoin;
