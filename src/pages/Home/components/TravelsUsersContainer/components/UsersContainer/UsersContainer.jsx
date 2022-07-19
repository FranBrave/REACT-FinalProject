import { Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUsersList } from "../../../../../../state/redux/actions/userActions";
import './UsersContainer.css'

const UsersContainer = () => {
    const { userList } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setReduxUsersList());
    }, []);

    useEffect(() => {}, [userList]);

    return (
        <Stack direction="row">
            {userList.map((user) => (
                <Link
                    className="user-card"
                    sx={{  
                        width:  { lg: '900px', xs: '300px'  },
                        height: { lg: '800px', xs: '750px'  },
                        border: "1px solid grey",
                        borderRadius: '30px',
                        m: '10px'
                    }}
                    key={user.id}
                    href={`/User/${user.username}`}
                >
                    <Typography
                        ml="21px"
                        color="#84a59d"
                        fontWeight="bold"
                        sx={{ fontSize: { lg: "33px", xs: "29px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        {user.username}
                    </Typography>
                    <Typography
                        ml="21px"
                        color="#1d3557"
                        fontWeight="bold"
                        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        {user.location}
                    </Typography>
                    <Typography
                        ml="21px"
                        color="#1d3557"
                        fontWeight="bold"
                        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        {user.bio}
                    </Typography>
                </Link>
            ))}
        </Stack>
    );
};

export default UsersContainer;
