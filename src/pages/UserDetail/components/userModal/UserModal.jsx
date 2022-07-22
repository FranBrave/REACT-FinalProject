import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../components/AuthModal/styles/styles";
import { toggleAuthModal } from "../../../../state/context/actions/modalActions";
import { ModalContext } from "../../../../state/context/modalContext";

const UserModal = () => {
    const classes = useStyles();

    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.edit, modalDispatch);
    };

    return (
        <Modal open={modalState.edit} sx={classes.backdrop}>
            <Fade in={modalState.edit}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <p>Hola</p>
                </Box>
            </Fade>
        </Modal>
    );
};

export default UserModal;
