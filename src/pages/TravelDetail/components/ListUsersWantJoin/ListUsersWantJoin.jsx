import { FormControl, InputLabel, Box, Select,MenuItem, Typography,Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReduxUserJoined } from "../../../../state/redux/actions/travelActions";

const ListUsersWantJoin = ({travel}) => {

    const dispatch = useDispatch();

    const AcceptUser = (username) => {

        const data = {
            userName: username,
            travelId: travel.id,
        };

        dispatch(setReduxUserJoined(data, travel.usersJoined));

        DenieUser(username);
    };
    
    const DenieUser = (username) => {
        
        const data = {
            userName: username,
            travelID: travel.id,
        };

        dispatch()
    }
    
    return (
        <Box>
        {travel ? (<FormControl fullWidth>
            <InputLabel> Users Want Join</InputLabel>
            <Select
                
                label="User"
            >
                {travel.usersWantJoin.map((user) => {
                    return (
                        <MenuItem value = {user.username}> {user.username}
                            <Link to = {`/User/${user.username}`}>
                            <Button>Ver Perfil</Button>
                            </Link>
                            <Button onClick={AcceptUser(user.username)}>Aceptar</Button>
                            <Button onClick={DenieUser(user.username)}>Denegar</Button>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>)
        : (
            <Typography>Loading</Typography>
        )}
        
        </Box>
    )

    

}

export default ListUsersWantJoin