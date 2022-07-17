import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { authUserProvider } from "../../../state/context/actions/authActions";
import { toggleAuthModal } from "../../../state/context/actions/modalActions";
import { AuthContext } from "../../../state/context/authContext";

const INITIAL_STATE = {
    username: "",
    email: "",
    password: "",
};

const AuthForm = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [loginDisplay, setLoginDisplay] = useState(true);
    const { authDispatch, modalState, modalDispatch } = useContext(AuthContext);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitUserForm = (e) => {
        e.preventDefault();
        authDispatch(authUserProvider(form, authDispatch));
        toggleAuthModal(modalState.open, modalDispatch);
    };

    const toggleForm = () => {
        setLoginDisplay(!loginDisplay);
    };

    return (
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
                }}
            />
            <Button onClick={submitUserForm}>Sign up</Button>
            <Typography
                onClick={toggleForm}
                fontSize="18px"
                sx={{ alignSelf: "center", cursor: "pointer" }}
            >
                {loginDisplay ? "Not registered yet?" : "Back to login form"}
            </Typography>
        </Grid>
    );
};

export default AuthForm;
