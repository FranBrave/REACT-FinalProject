import React, { useContext } from "react";
import { AuthContext } from "../../state/context/authContext";
import { Modal, Typography, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { useStyles } from "./styles/styles";

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
                    <Button onClick={handleCloseModal}>Close modal</Button>
                    <Typography variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AuthModal;
