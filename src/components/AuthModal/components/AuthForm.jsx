import { Grid, Typography, TextField, Button, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
    authUserProvider,
    resetAuthProvider,
} from "../../../state/context/actions/authActions";
import { toggleAuthModal } from "../../../state/context/actions/modalActions";
import { AuthContext } from "../../../state/context/authContext";
import { ModalContext } from "../../../state/context/modalContext";
import MuiAlert from "@mui/material/Alert";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthForm = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [loginDisplay, setLoginDisplay] = useState(true);
    const { authDispatch, userAuth } = useContext(AuthContext);
    const { modalState, modalDispatch } = useContext(ModalContext);
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        userAuth.error !== "" && errorHandle();
    }, [userAuth]);

    useEffect(() => {
        userAuth.done && modalHandle();
    }, [userAuth]);

    const modalHandle = () => {
        toggleAuthModal(true, modalDispatch);
    };

    const errorHandle = () => {
        setOpen(true);

        setTimeout(() => {
            setOpen(false);
            resetAuthProvider(authDispatch);
        }, 2000);
    };

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();
        authUserProvider(form, authDispatch);
    };

    const toggleForm = () => {
        setLoginDisplay(!loginDisplay);
    };

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
            >
                <Typography level="h4" component="h1" sx={{ fontSize: 30 }}>
                    <b>Welcome!</b>
                </Typography>
                <Typography level="body2" sx={{ fontSize: 20 }}>
                    {loginDisplay ? "Log in" : "Sign up"}
                </Typography>
                {!loginDisplay && (
                    <TextField
                        name="username"
                        type="text"
                        placeholder="johndoe"
                        label="Username"
                        onChange={handleChangeForm}
                        sx={{
                            mt: 2,
                            mb: 2,
                            width: "40vw",
                        }}
                    />
                )}
                <TextField
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                    onChange={handleChangeForm}
                    sx={{
                        mt: 2,
                        mb: 2,
                        width: "40vw",
                    }}
                />
                <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    onChange={handleChangeForm}
                    sx={{
                        mt: 2,
                        mb: 2,
                        fontSize: 18,
                        width: "40vw",
                    }}
                />
                <Button onClick={submitUserForm}>
                    {loginDisplay ? "Log in" : "Sign up"}
                </Button>
                <Typography
                    onClick={toggleForm}
                    fontSize="18px"
                    sx={{ alignSelf: "center", cursor: "pointer" }}
                >
                    {loginDisplay
                        ? "Not registered yet?"
                        : "Back to login form"}
                </Typography>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="warning"
                    sx={{
                        width: "100%",
                        top: "20rem",
                    }}
                >
                    {userAuth.error}
                </Alert>
            </Snackbar>
        </>
    );
};

export default AuthForm;
