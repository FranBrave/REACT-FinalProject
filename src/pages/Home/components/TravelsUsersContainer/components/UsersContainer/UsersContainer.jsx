import {
  Link,
  Box,
  Typography,
  Avatar,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUsersList } from "../../../../../../state/redux/actions/userActions";
import "./UsersContainer.css";

const UsersContainer = () => {
  const { userList } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxUsersList());
  }, []);

  useEffect(() => {}, [userList]);

  return (
    <>
      <Box>
        <Typography
          container
          alignItems="center"
          justifyContent="center"
          color="#ffcb47"
          fontWeight=""
          sx={{
            fontSize: { lg: "33px", xs: "29px" },
            display: "flex",
            fontWeight: "900",
          }}
          m="3rem"
          pb="10px"
          textTransform="none"
        >
          Nuestros compañeros de viaje
        </Typography>
      </Box>
      {userList ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          sx={{ margin: { xs: "3.9px" } }}
        >
          {userList.map((user) => (
            <Link key={user.id} href={`/User/${user.username}`}>
              <Grid
                sx={{
                  border: "1px solid grey",
                }}
              >
                <Grid
                  sx={{
                    background: `url(${user.images[0]})`,
                    backgroundSize: "cover",
                    width: {
                      lg: "20vw",
                      sm: "50vw",
                      xs: "95vw",
                    },
                    height: {
                      lg: "25vh",
                      sm: "50vw",
                      xs: "70vh",
                    },
                  }}
                  loading="lazy"
                />

                <Box display="flex" flexDirection="column">
                  <Avatar
                    className="user-card__avatar"
                    backgroundPosition="center"
                    src={user.avatar}
                    sx={{
                      alignSelf: "center",
                      height: { lg: "150px", sm: "120px", xs: "150px" },
                      width: { lg: "150px", sm: "120px", xs: "150px" },
                      border: "5px solid white",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    pt: "5px",
                    fontWeight: "900",
                    color: "#2b2d42",
                    textTransform: "capitalize",
                    fontSize: {
                      lg: "33px",
                      xs: "29px",
                    },
                  }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {user.username}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "900",
                    color: "black",
                    textTransform: "none",
                    fontSize: {
                      lg: "15px",
                      xs: "13px",
                    },
                  }}
                >
                  Vive en {user.location}
                </Typography>
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="caption"
                    sx={{
                      textAlign: "center",
                      m: "20px",
                      fontWeight: "900",
                      display: "inline-block",
                      whiteSpace: "pre-line",
                    }}
                  >
                    "{user.bio && user.bio.slice(0, 40).concat("...")}"
                  </Typography>
                </Box>
              </Grid>
            </Link>
          ))}
        </Grid>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <CircularProgress disableShrink />
        </Stack>
      )}
    </>
  );
};

export default UsersContainer;
