import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { logoutUserProvider } from "../../state/context/actions/authActions";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { AuthContext } from "../../state/context/authContext";

const Header = () => {
    const {
        modalState,
        modalDispatch,
        userAuth,
        userDetailLogged,
        authDispatch,
    } = useContext(AuthContext);

    const handleAuthModal = () => {
        toggleAuthModal(modalState.open, modalDispatch);
    };

    const handleLogout = () => {
        authDispatch(logoutUserProvider(authDispatch));
    };

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
        >
            <Typography>HeaderLogo</Typography>
            {userAuth.userId && (
                <Typography>{userDetailLogged.username}</Typography>
            )}
            {!userAuth.userId ? (
                <Button onClick={handleAuthModal}>LogIn</Button>
            ) : (
                <Button onClick={handleLogout}>Log Out</Button>
            )}
        </Grid>
    );
};

export default Header;
