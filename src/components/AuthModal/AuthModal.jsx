import React, { useContext } from "react";
import { AuthContext } from "../../state/context/authContext";
import { Modal, Typography, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { useStyles } from "./styles/styles";
import AuthForm from "./components/AuthForm";

const AuthModal = () => {
    const classes = useStyles();

    const { modalState, modalDispatch } = useContext(AuthContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.open, modalDispatch);
    };

    return (
        <Modal open={modalState.open} sx={classes.backdrop}>
            <Fade in={modalState.open}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <AuthForm />
                </Box>
            </Fade>
        </Modal>
    );
};

export default AuthModal;
