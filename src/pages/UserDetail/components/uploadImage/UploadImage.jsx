import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { setReduxUploadImg } from "../../../../state/redux/actions/userActions";
import { useDispatch } from "react-redux/es/exports";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const UploadImage = ({ userDetail }) => {
    const [form, setForm] = useState({ img: [] });
    const [counter, setCounter] = useState(["a"]);
    const dispatch = useDispatch();

    const addInput = () => {
        setCounter([...counter, "a"]);
    };

    const removeInput = () => {
        const newCounter = counter.slice(0, counter.length - 1);
        setCounter(newCounter);
    };

    const handleImage = (e) => {
        const currentForm = form;
        currentForm.img.push(e.currentTarget.files[0]);
        setForm(currentForm);
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
        >
            <Stack
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
            >
                {counter.length < 3 && (
                    <Button
                        onClick={addInput}
                        sx={{
                            backgroundColor: "greenyellow",
                            color: "white",
                            "&:hover": { backgroundColor: "green" },
                        }}
                    >
                        Add
                    </Button>
                )}
                {counter.length > 1 && (
                    <Button
                        onClick={removeInput}
                        sx={{
                            backgroundColor: "red",
                            color: "white",
                            "&:hover": { backgroundColor: "orangered" },
                        }}
                    >
                        Remove
                    </Button>
                )}
            </Stack>
            <Grid
                sx={{
                    width: "15vw",
                    height: "15vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2rem",
                    width: "70vw",
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
                            border: "2px solid black",
                            borderRadius: "1rem",
                        }}
                    >
                        <label for="file-input">
                            <AddPhotoAlternateIcon />
                        </label>
                        <TextField
                            type="file"
                            onChange={(e) => handleImage(e)}
                            sx={{ display: "none" }}
                            multiple
                        ></TextField>
                    </Box>
                ))}
            </Grid>

            <Button onClick={uploadImg}>Upload</Button>
        </Grid>
    );
};

export default UploadImage;
