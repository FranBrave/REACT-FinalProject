import { Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUsersList } from "../../../../../../state/redux/actions/userActions";

const UsersContainer = () => {
    const { userList, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    console.log(userList);
    useEffect(() => {
        dispatch(setReduxUsersList());
    }, []);

    return (
        <Stack direction="row">
            {userList.map((user) => (
                <Link
                    className="user-card"
                    sx={{
                        width: 300,
                        height: 300,
                        border: "1px solid grey",
                    }}
                    key={user.id}
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
                        {user.travelsCreated}
                    </Typography>
                </Link>
            ))}
        </Stack>
    );
};

export default UsersContainer;
