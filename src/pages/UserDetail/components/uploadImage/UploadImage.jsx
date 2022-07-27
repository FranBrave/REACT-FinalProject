import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { setReduxUploadImg } from "../../../../state/redux/actions/userActions";
import { useDispatch } from "react-redux/es/exports";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PreviewImage from "./utils/PreviewImage";
import shortid from "shortid";

const UploadImage = ({ userDetail }) => {
    const [form, setForm] = useState({ img: ["a"] });
    const [counter, setCounter] = useState(["a"]);
    const [file, setFile] = useState();
    const dispatch = useDispatch();

    const addInput = () => {
        const currentForm = form;
        currentForm.img.length < 3 && currentForm.img.push("a");
        setForm(currentForm);
        setCounter([...counter, "a"]);
    };

    const removeInput = () => {
        const currentForm = form;
        const newForm = currentForm.img.slice(0, form.img.length - 1);
        const state = { img: newForm };
        setForm(state);

        const newCounter = counter.slice(0, counter.length - 1);
        setCounter(newCounter);
    };

    const handleImages = (e) => {
        const currentForm = form;
        form.img[0] === "a" && form.img.splice(0, 1);
        form.img.includes("a") && form.img.splice(form.img.indexOf("a"), 1);
        currentForm.img.push(e.currentTarget.files[0]);
        setForm(currentForm);
        setFile(e.currentTarget.files[0]);
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
                {form.img.length < 3 && (
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
                {form.img.length > 1 && (
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
                {form.img.map((el) => (
                    <Box
                        key={shortid.generate()}
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
                        {el === "a" ? (
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
                        ) : (
                            <PreviewImage file={el} />
                        )}
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
