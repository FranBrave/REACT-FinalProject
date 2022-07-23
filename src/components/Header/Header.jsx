import { Button, Grid, Typography, Stack, Chip } from "@mui/material";
import React, { useContext } from "react";
import { logoutUserProvider } from "../../state/context/actions/authActions";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { AuthContext } from "../../state/context/authContext";
import { Link } from "react-router-dom";
import { useUserLoggedDetail } from "../../customHook/useUserLoggedDetail";
import Logo from "../../assets/icons/logo.png";
import "./Header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Login from "@mui/icons-material/Login";

const Header = () => {
  const { modalState, modalDispatch, userAuth, authDispatch } = useContext(
    AuthContext
  );
  const userLogged = useUserLoggedDetail();

  const handleAuthModal = () => {
    toggleAuthModal(modalState.open, modalDispatch);
  };

  const handleLogout = () => {
    logoutUserProvider(authDispatch);
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      gap="1rem"
      borderBottom="solid 1px gray"
    >
      <Stack>
        <Link className="logo" to="/">
          <img
            className="logo"
            src={Logo}
            alt="logo"
            style={{ width: "90px", height: "90px", margin: "10px" }}
          />
        </Link>
      </Stack>
      {userAuth.userId && userLogged && (
        <Link to={`/User/${userLogged.username}`}>
          <Typography className="username" variant="h4">
            Hola {userLogged.username}
          </Typography>
        </Link>
      )}
      {!userAuth.userId ? (
        <Chip
          className="logout"
          icon={<Login />}
          label="Log In"
          onClick={handleAuthModal}
          fontFamily="Roboto"
          sx={{
            bgcolor: "#84a59d",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            right: "0",
          }}
        />
      ) : (
        <Chip
          className="logout"
          icon={<Logout />}
          label="Log Out"
          onClick={handleLogout}
          fontFamily="Roboto"
          sx={{
            bgcolor: "#84a59d",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            right: "0",
          }}
        />
      )}
    </Grid>
  );
};

export default Header;
