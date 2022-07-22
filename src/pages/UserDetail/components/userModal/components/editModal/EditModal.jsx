import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleAuthModal } from "../../../../../../state/context/actions/modalActions";

const EditModal = () => {
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
                    <p>Edit Modal</p>
                </Box>
            </Fade>
        </Modal>
    );
};

export default EditModal;
