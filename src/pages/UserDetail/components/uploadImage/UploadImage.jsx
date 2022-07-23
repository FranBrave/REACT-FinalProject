import { Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const UploadImage = ({ handleCloseModal, userDetail }) => {
    const [form, setForm] = useState({ img: [] });
    const [counter, setCounter] = useState(["a"]);

    const addInput = () => {
        setCounter([...counter, "a"]);
    };

    const removeInput = () => {
        const newCounter = counter.slice(0, counter.length - 1);
        setCounter(newCounter);
    };

    console.log(counter);
    return (
        <Grid
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={1}
        >
            <Stack
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
                <TextField type="file"></TextField>
            ))}
            <Button>Upload</Button>
        </Grid>
    );
};

export default UploadImage;
