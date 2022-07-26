import {
    FormControl,
    InputLabel,
    Box,
    Select,
    MenuItem,
    Typography,
    Button,
    Stack,
    Grid,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReduxUserJoined } from "../../../../state/redux/actions/travelActions";

const ListUsersWantJoin = ({ travel }) => {
    const dispatch = useDispatch();

    // Use State con el usuario seleccionado
    const acceptUser = () => {
        const data = {
            username: userSelected,
            travelId: travel.id,
        };

        dispatch(setReduxUserJoined(data, travel.usersJoined));

        // DenieUser(username);
    };

    const denieUser = () => {
        const data = {
            userName: userSelected,
            travelID: travel.id,
        };

        // dispatch()
    };

    return (
        <Box>
            {travel ? (
                <Grid sx={{ direction: "column" }}>
                    <FormControl fullWidth>
                        <InputLabel> Users Want Join</InputLabel>
                        <Select label="User">
                            {travel.usersWantJoin.map((user) => {
                                return (
                                    <MenuItem
                                        value={user.username}
                                        onChange={setUserSelected(
                                            user.username
                                        )}
                                    >
                                        {user.username}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    {userSelected && (
                        <Stack sx={{ direction: "row" }}>
                            <Link to={`/User/${userSelected}`}>
                                <Button>Ver Perfil</Button>
                            </Link>
                            <Button onClick={acceptUser}>Aceptar</Button>
                            <Button onClick={denieUser}>Denegar</Button>
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
