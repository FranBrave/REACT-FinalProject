import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { setReduxUploadImg } from "../../../../state/redux/actions/userActions";
import { useDispatch } from "react-redux/es/exports";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PreviewImage from "./utils/PreviewImage";

const UploadImage = ({ userDetail }) => {
    const [form, setForm] = useState({ img: [] });
    const [counter, setCounter] = useState(["a"]);
    const [file, setFile] = useState();
    const dispatch = useDispatch();

    const addInput = () => {
        setCounter([...counter, "a"]);
    };

    const removeInput = () => {
        const newCounter = counter.slice(0, counter.length - 1);
        setCounter(newCounter);
    };

    const handleImages = (e) => {
        const currentForm = form;
        currentForm.img.push(e.currentTarget.files[0]);
        setForm(currentForm);
        // setFile(e.currentTarget.files[0]);
    };

    const uploadImg = () => {
        const formData = new FormData();
        form.img.map((el) => formData.append("img", el));

        dispatch(setReduxUploadImg(formData, userDetail._id));
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{ gap: "2rem" }}
        >
            <Stack
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                {counter.length < 3 && (
                    <Button
                        onClick={addInput}
                        sx={{
                            color: "black",
                            borderColor: "#88F29B",
                            background: "#88F29B",
                            padding: "0.3rem 2rem",
                            borderRadius: "2rem",
                            "&:hover": { backgroundColor: "#6CBE7A" },
                        }}
                    >
                        Añadir
                    </Button>
                )}
                {counter.length > 1 && (
                    <Button
                        onClick={removeInput}
                        sx={{
                            backgroundColor: "#F53708",
                            color: "white",
                            padding: "0.3rem 2rem",
                            borderRadius: "2rem",
                            "&:hover": { backgroundColor: "#DA3209" },
                        }}
                    >
                        Eliminar
                    </Button>
                )}
            </Stack>
            <Grid
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                {counter.map((el) => (
                    <Box
                        sx={{
                            width: "15vw",
                            height: "15vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid gray",
                            borderRadius: "1rem",
                            cursor: "pointer",
                            "&:hover": { borderColor: "#575754" },
                        }}
                    >
                        (
                        <>
                            <label for="file-images">
                                <AddPhotoAlternateIcon
                                    sx={{
                                        fontSize: "4rem",
                                        color: "gray",
                                        cursor: "pointer",
                                        "&:hover": { color: "#575754" },
                                    }}
                                />
                            </label>
                            <TextField
                                id="file-images"
                                type="file"
                                onChange={(e) => handleImages(e)}
                                sx={{ display: "none" }}
                                multiple
                            ></TextField>
                        </>
                        )
                    </Box>
                ))}
            </Grid>
            <Button
                onClick={uploadImg}
                sx={{
                    p: "0.5rem 4rem",
                    backgroundColor: "#ffcb47",
                    color: "white",
                    borderRadius: "2rem",
                    "&:hover": {
                        backgroundColor: "#F0A370",
                    },
                }}
            >
                Subir imagenes
            </Button>
        </Grid>
    );
};

export default UploadImage;
