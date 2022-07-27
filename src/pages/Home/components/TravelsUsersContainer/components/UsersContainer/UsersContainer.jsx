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
          color="black"
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
        <Box className="user">
          <Grid
            className="user-card"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap="0.6rem"
          >
            {userList.map((user) => (
              <Link key={user.id} href={`/User/${user.username}`}>
                <Grid
                  className="user-card1"
                  sx={{
                    border: "1px solid none",
                    m: "5px",
                    borderRadius: "10px",
                    boxShadow: " 0px 18px 30px -10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Grid
                    sx={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      background: `url(${user.images[0]})`,
                      backgroundSize: "cover",

                      width: {
                        lg: "20vw",
                        sm: "30vw",
                        xs: "95vw",
                      },
                      height: {
                        lg: "20vh",
                        sm: "30vw",
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
                      ml: "10px",
                      mt: "10px",
                      textTransform: "capitalize",
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: {
                        lg: "25px",
                        xs: "20px",
                      },
                    }}
                  >
                    {user.username}
                  </Typography>
                  <Typography
                    sx={{
                      m: "10px",
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
                  <Box display="flex" flexDirection="column"></Box>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Box>
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
