import React, { useContext } from "react";
import { Modal, Button, Fade, Typography, Stack, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../../../../components/AuthModal/styles/styles";
import { ModalContext } from "../../../../../../state/context/modalContext";
import { toggleInfoModal } from "../../../../../../state/context/actions/modalActions";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

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
                    <CloseIcon
                        onClick={handleCloseModal}
                        sx={{ cursor: "pointer" }}
                    />
                    {userDetail && userDetail.name && (
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="start"
                            gap="1rem"
                        >
                            <Typography>
                                Nombre de usuario: {userDetail.username}
                            </Typography>
                            <Typography>Nombre: {userDetail.name}</Typography>
                            <Typography>
                                Apellidos: {userDetail.surname}
                            </Typography>
                            <Typography>Edad: {userDetail.age}</Typography>
                            <Typography>Sexo: {userDetail.sex}</Typography>
                            <Typography>
                                De donde es: {userDetail.location}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Typography>Preferencias:</Typography>
                                {userDetail.preferences.length > 0 &&
                                    userDetail.preferences.map((item) => (
                                        <Typography>{item}</Typography>
                                    ))}
                            </Stack>
                        </Grid>
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default InfoModal;
