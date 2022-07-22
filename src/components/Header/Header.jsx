import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { logoutUserProvider } from "../../state/context/actions/authActions";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { AuthContext } from "../../state/context/authContext";
import { Link } from "react-router-dom";
import { useUserLoggedDetail } from "../../customHook/useUserLoggedDetail";
import { ModalContext } from "../../state/context/modalContext";

const Header = () => {
    const { userAuth, authDispatch } = useContext(AuthContext);
    const { modalState, modalDispatch } = useContext(ModalContext);
    const userLogged = useUserLoggedDetail();

    const handleAuthModal = () => {
        toggleAuthModal(modalState.open, modalDispatch);
    };

    const handleLogout = () => {
        logoutUserProvider(authDispatch);
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
            {userAuth.userId && userLogged && (
                <Link to={`/User/${userLogged.username}`}>
                    <Typography>{userLogged.username}</Typography>
                </Link>
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
