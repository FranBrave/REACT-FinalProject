import {
    ImageListItem,
    Avatar,
    Button,
    Grid,
    ImageList,
    Stack,
    Typography,
    TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import shortid from "shortid";
import { ModalContext } from "../../../../state/context/modalContext";
import {
    toggleCreateModal,
    toggleEditModal,
    toggleImageModal,
    toggleInfoModal,
} from "../../../../state/context/actions/modalActions";
import { useCheckSameUser } from "../../../../customHook/useCheckSameUser";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { setReduxUserEdit } from "../../../../state/redux/actions/userActions";

const UserInfo = ({ userDetail, username }) => {
    const { modalState, modalDispatch } = useContext(ModalContext);
    const isSameUser = useCheckSameUser(username);
    const [form, setForm] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setForm(userDetail);
    }, [userDetail]);

    const handleEditModal = () => {
        toggleEditModal(modalState.edit, modalDispatch);
    };

    const handleCreateModal = () => {
        toggleCreateModal(modalState.create, modalDispatch);
    };

    const handleInfoModal = () => {
        toggleInfoModal(modalState.info, modalDispatch);
    };

    const handleImageModal = () => {
        toggleImageModal(modalState.image, modalDispatch);
    };

    const submitAvatar = (e) => {
        console.log("avatar");
        const data = {
            img: e.currentTarget.files[0],
        };
        const formData = new FormData();

        Object.entries(data).forEach((el) => {
            formData.append(el[0], el[1]);
        });

        dispatch(setReduxUserEdit(formData, userDetail._id));
    };

    return (
        <>
            {userDetail && (
                <Grid sx={{ display: "contents" }}>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="1rem"
                        sx={{ width: "70vw" }}
                    >
                        <Stack
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                            sx={{ position: "relative" }}
                        >
                            <Avatar
                                sx={{ width: 224, height: 224 }}
                                src={userDetail.avatar}
                            />
                            <Box>
                                <label for="file-input">
                                    <EditIcon
                                        sx={{
                                            position: "absolute",
                                            right: "0",
                                            bottom: "1rem",
                                            color: "gray",
                                            cursor: "pointer",
                                            "&:hover": {
                                                color: "black",
                                            },
                                        }}
                                    />
                                </label>
                                <TextField
                                    type="file"
                                    id="file-input"
                                    sx={{ display: "none" }}
                                    onChange={(e) => submitAvatar(e)}
                                />
                            </Box>
                        </Stack>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="start"
                            justifyContent="center"
                            gap="1rem"
                            sx={{ width: "70%" }}
                        >
                            <Stack
                                spacing={0}
                                direction="row"
                                alignItems="start"
                                justifyContent="center"
                                gap="5px"
                            >
                                <Typography>{userDetail.name}</Typography>
                                <Typography>{userDetail.surname}</Typography>
                                <InfoIcon
                                    sx={{
                                        cursor: "pointer",
                                        color: "gray",
                                        "&:hover": {
                                            color: "black",
                                        },
                                    }}
                                    onClick={handleInfoModal}
                                />
                            </Stack>

                            <Typography>{userDetail.bio}</Typography>
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justifyContent="start"
                                gap="1rem"
                            >
                                <Stack
                                    container
                                    spacing={0}
                                    direction="row"
                                    alignItems="start"
                                    justifyContent="center"
                                    gap="5px"
                                >
                                    <LocationOnIcon sx={{ color: "gray" }} />
                                    {userDetail.location}
                                </Stack>
                                <Stack
                                    spacing={0}
                                    direction="row"
                                    alignItems="start"
                                    justifyContent="center"
                                    gap="5px"
                                >
                                    <AccessTimeIcon sx={{ color: "gray" }} />
                                    {userDetail.age} años
                                </Stack>
                            </Grid>
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justifyContent="start"
                                gap="1rem"
                            >
                                {isSameUser && (
                                    <Button
                                        sx={{
                                            p: "0.5rem 4rem",
                                            color: "black",
                                            borderRadius: "2rem",
                                            border: "2px solid black",
                                            "&:hover": {
                                                backgroundColor: "#F1F1F1",
                                            },
                                        }}
                                        onClick={handleEditModal}
                                    >
                                        Editar
                                    </Button>
                                )}
                                {isSameUser && (
                                    <Button
                                        sx={{
                                            p: "0.5rem 4rem",
                                            backgroundColor: "#ffcb47",
                                            color: "black",
                                            borderRadius: "2rem",
                                            border: "2px solid #ffcb47",
                                            "&:hover": {
                                                backgroundColor: "#F0A370",
                                            },
                                        }}
                                        onClick={handleCreateModal}
                                    >
                                        Crear viaje
                                    </Button>
                                )}
                                {isSameUser && (
                                    <Button
                                        sx={{
                                            p: "0.5rem 4rem",
                                            color: "black",
                                            borderRadius: "2rem",
                                            backgroundColor: "#C0EEFC",
                                            border: "2px solid #C0EEFC",
                                            "&:hover": {
                                                backgroundColor: "#D8F2F9",
                                            },
                                        }}
                                        onClick={handleImageModal}
                                    >
                                        Subir imágenes
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    {userDetail.images && userDetail.images.length > 0 && (
                        <ImageList
                            sx={{
                                width: "60vw",
                                height: "30vh",
                                alignContent: "center",
                            }}
                            cols={3}
                            rowHeight="30vh"
                        >
                            {userDetail.images.map((item) => (
                                <ImageListItem key={shortid.generate()}>
                                    <img
                                        src={`${item}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Grid>
            )}
        </>
    );
};

export default UserInfo;
