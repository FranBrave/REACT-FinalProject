import { Grid, Typography, Stack, Chip } from "@mui/material";
import React, { useContext } from "react";
import { logoutUserProvider } from "../../state/context/actions/authActions";
import { toggleAuthModal } from "../../state/context/actions/modalActions";
import { AuthContext } from "../../state/context/authContext";
import { Link } from "react-router-dom";
import { useUserLoggedDetail } from "../../customHook/useUserLoggedDetail";
import Logo from "../../assets/icons/logo.png";
import "./Header.css";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import { ModalContext } from "../../state/context/modalContext";

const Header = () => {
  const { userAuth, authDispatch } = useContext(AuthContext);
  const { modalState, modalDispatch } = useContext(ModalContext);

  const userLogged = useUserLoggedDetail();

  const handleAuthModal = () => {
    toggleAuthModal(modalState.auth, modalDispatch);
  };

  const handleLogout = () => {
    console.log(1);
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
      marginBottom="5rem"
    >
      <Stack>
        <Link className="logo" to="/">
          <img
            className="logo"
            src={Logo}
            alt="logo"
            style={{
              width: "90px",
              height: "90px",
              margin: "10px",
            }}
          />
        </Link>
      </Stack>
      {userAuth.userId && userLogged && (
        <Link to={`/User/${userLogged.username}`}>
          <Typography
            className="username"
            sx={{
              fontSize: { lg: "30px", xs: "20px" },
            }}
          >
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
            bgcolor: "#7DA2D1",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "45px" },
            fontSize: { lg: "20px", xs: "0" },
            height: { lg: "56px", xs: "40px" },
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
            bgcolor: "#D56049",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "45px" },
            fontSize: { lg: "20px", xs: "0px" },
            height: { lg: "56px", xs: "40px" },
            right: "0",
            m: "5px",
          }}
        />
      )}
    </Grid>
  );
};

export default Header;
