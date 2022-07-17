import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { AuthContext } from "../../state/context/authContext";


const Header = () => {
    const { modalState, modalDispatch } = useContext(AuthContext);

    const handleAuthModal = () => {
        toggleAuthModal(modalState.open, modalDispatch);
    };

    console.log(modalState);

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
            <Button onClick={handleAuthModal}>Open modal</Button>
        </Grid>
    );
};

export default Header;
