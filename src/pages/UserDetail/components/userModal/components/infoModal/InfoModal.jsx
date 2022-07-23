import React, { useContext } from "react";
import { Modal, Button, Fade, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleInfoModal } from "../../../../../../state/context/actions/modalActions";
import { useSelector } from "react-redux";

const InfoModal = () => {
    const classes = useStyles();
    const { userDetail } = useSelector((state) => state.user);
    const { modalState, modalDispatch } = useContext(ModalContext);

    const handleCloseModal = () => {
        toggleInfoModal(modalState.info, modalDispatch);
    };

    return (
        <Modal open={modalState.info} sx={classes.backdrop}>
            <Fade in={modalState.info}>
                <Box sx={classes.modal}>
                    <Button onClick={handleCloseModal}>Close</Button>
                    {userDetail && userDetail.name && (
                        <>
                            <Typography>
                                User name: {userDetail.username}
                            </Typography>
                            <Typography>Name: {userDetail.name}</Typography>
                            <Typography>
                                Surname: {userDetail.surname}
                            </Typography>
                            <Typography>Age: {userDetail.age}</Typography>
                            <Typography>Sex: {userDetail.sex}</Typography>
                            <Typography>
                                Location: {userDetail.location}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Typography>Preferences:</Typography>
                                {userDetail.preferences.length > 0 &&
                                    userDetail.preferences.map((item) => (
                                        <Typography>{item}</Typography>
                                    ))}
                            </Stack>
                        </>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default InfoModal;
