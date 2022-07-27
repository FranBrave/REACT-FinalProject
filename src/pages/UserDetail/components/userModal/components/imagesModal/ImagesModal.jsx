import React, { useContext } from "react";
import { Modal, Button, Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleAuthModal } from "../../../../../../state/context/actions/modalActions";
import { useSelector } from "react-redux";
import UploadImage from "../../../uploadImage/UploadImage";
import CloseIcon from "@mui/icons-material/Close";

const ImagesModal = () => {
    const classes = useStyles();
    const { userDetail } = useSelector((state) => state.user);
    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleAuthModal(modalState.image, modalDispatch);
    };

    return (
        <Modal open={modalState.image} sx={classes.backdrop}>
            <Fade in={modalState.image}>
                <Box sx={classes.modal}>
                    <CloseIcon
                        onClick={handleCloseModal}
                        sx={{ cursor: "pointer" }}
                    />
                    {userDetail && (
                        <UploadImage
                            handleCloseModal={handleCloseModal}
                            userDetail={userDetail}
                        />
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ImagesModal;
