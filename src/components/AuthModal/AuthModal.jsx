import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { useStyles } from "./styles/styles";
import AuthForm from "./components/AuthForm";
import { ModalContext } from "../../state/context/modalContext";

const AuthModal = () => {
    const classes = useStyles();

    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.auth, modalDispatch);
    };

    return (
        <Modal open={modalState.auth} sx={classes.backdrop}>
            <Fade in={modalState.auth}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <AuthForm />
                </Box>
            </Fade>
        </Modal>
    );
};

export default AuthModal;
