import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleAuthModal } from "../../../../../../state/context/actions/modalActions";
import EditForm from "../../../editForm/EditForm";
import { useSelector } from "react-redux";

const EditModal = () => {
    const classes = useStyles();
    const { userDetail } = useSelector((state) => state.user);
    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.edit, modalDispatch);
    };

    return (
        <Modal open={modalState.edit} sx={classes.backdrop}>
            <Fade in={modalState.edit}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    {userDetail && (
                        <EditForm
                            userId={userDetail._id}
                            handleCloseModal={handleCloseModal}
                        />
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default EditModal;
