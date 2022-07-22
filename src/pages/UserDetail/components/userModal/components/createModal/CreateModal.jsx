import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleAuthModal } from "../../../../../../state/context/actions/modalActions";
import TravelCreation from "../../../travelCreation/TravelCreation";

const CreateModal = () => {
    const classes = useStyles();

    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.create, modalDispatch);
    };

    return (
        <Modal open={modalState.create} sx={classes.backdrop}>
            <Fade in={modalState.create}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    <TravelCreation />
                </Box>
            </Fade>
        </Modal>
    );
};

export default CreateModal;
