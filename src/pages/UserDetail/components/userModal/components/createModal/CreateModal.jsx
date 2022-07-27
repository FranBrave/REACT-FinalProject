import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleAuthModal } from "../../../../../../state/context/actions/modalActions";
import TravelCreation from "../../../travelCreation/TravelCreation";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const CreateModal = () => {
    const classes = useStyles();
    const { userDetail } = useSelector((state) => state.user);
    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.create, modalDispatch);
    };

    return (
        <Modal open={modalState.create} sx={classes.backdrop}>
            <Fade in={modalState.create}>
                <Box sx={classes.modal}>
                    <CloseIcon
                        onClick={handleCloseModal}
                        sx={{ cursor: "pointer" }}
                    />
                    {userDetail && (
                        <TravelCreation
                            userId={userDetail._id}
                            handleCloseModal={handleCloseModal}
                        />
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default CreateModal;
