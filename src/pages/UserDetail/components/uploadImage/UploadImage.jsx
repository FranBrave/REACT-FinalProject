import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { setReduxUploadImg } from "../../../../state/redux/actions/userActions";
import { useDispatch } from "react-redux/es/exports";

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
            {counter.map((el) => (
                <TextField
                    type="file"
                    onChange={(e) => handleImage(e)}
                    multiple
                ></TextField>
            ))}
            <Button onClick={uploadImg}>Upload</Button>
        </Grid>
    );
};

export default UploadImage;
