import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ButtonsTravelDetailContainer from "../ButtonsTravelDetailContainer/ButtonsTravelDetailContainer";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListUsersWantJoin from "../ListUsersWantJoin/ListUsersWantJoin";
import { useDispatch, useSelector } from "react-redux";
import { setReduxTravelDetail } from "../../../../state/redux/actions/travelActions";
import { AuthContext } from "../../../../state/context/authContext";

const TravelDetailContainer = () => {
  const { id } = useParams();
  

  const { travelDetail } = useSelector((state) => state.travel);
  const [imgPrincipal, setimgPrincipal] = useState();
  const { userAuth, authDispatch } = useContext(AuthContext);
  const dispatch = useDispatch();

  
  console.log(travelDetail)
  
  // useEffect(() => {
  //   const userDetail = useUserLoggedDetail();
  //   setUserAuth(userDetail);
  // },[])

  


  useEffect(() => {
    travelDetail && setimgPrincipal(travelDetail.images[0]);
  }, [travelDetail]);

  useEffect(() => {
    dispatch(setReduxTravelDetail(id));
  }, [id]);

  const actualizarImgPrincipal = (image) => {
    setimgPrincipal(image);
  };

  console.log(travelDetail)
  
  return (
    <>
      {travelDetail ? (
        <Grid>
          <Grid xs={8}>
            <Typography
              color="#1d3557"
              fontWeight="bold"
              textTransform="capitalize"
              fontSize="3vw"
              sx={{
                mx: { lg: "3vw", xs: "50vw" },
                mt: { lg: "4vw", xs: "2vw" },
              }}
            >
              {travelDetail.title}
            </Typography>
          </Grid>

          <Typography>
            {travelDetail.tags.map((tag) => (
              <p>{tag.title}</p>
            ))}
          </Typography>

          <Grid>
            <Grid xs={8}>
              <Box
                component="img"
                sx={{
                  height: { lg: "50vh", xs: "40vh" },
                  width: { lg: "50vw", xs: "100vw" },
                  border: "1px solid grey",
                  mx: { lg: "3vw", xs: "50vw" },
                  mt: { lg: "4vw", xs: "2vw" },
                }}
                src={imgPrincipal}
                alt={travelDetail.cityName}
              />
            </Grid>
            <Grid xs={4}>
              {travelDetail.images.map((image) => {
                {
                  return (
                    <Box
                      onClick={() => actualizarImgPrincipal(image)}
                      component="img"
                      //border = {image !== imgPrincipal ? "100px solid red" : "none"}
                      sx={{
                        height: {
                          lg: "20vh",
                          xs: "10vh",
                        },
                        width: {
                          lg: "25vw",
                          xs: "10vw",
                        },
                        border: "1px solid grey",
                        mx: { lg: "3vw", xs: "50vw" },
                        mt: { lg: "4vw", xs: "2vw" },
                      }}
                      src={image}
                    />
                  );
                }
              })}
            </Grid>
            <Grid xs={1}>
              <SvgIcon
                component={PlaceIcon}
                sx={{
                  ml: { lg: "6.5vw", xs: "50vw" },
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              />
            </Grid>

            <Grid xs={1}>
              <Typography
                sx={{
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              >
                {travelDetail.cityName}
              </Typography>
            </Grid>
            <Grid xs={1}>
              <SvgIcon
                component={CalendarMonthIcon}
                sx={{
                  ml: { lg: "6.5vw", xs: "50vw" },
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              />
            </Grid>
            <Grid xs={3}>
              <Typography
                sx={{
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              >
                from: {travelDetail.dataFrom} to: {travelDetail.dataTo}
              </Typography>
            </Grid>

            <Grid xs={1}>
              <Typography
                sx={{
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              >
                {travelDetail.cityName}
              </Typography>
            </Grid>
            <Grid xs={1}>
              <SvgIcon
                component={CalendarMonthIcon}
                sx={{
                  ml: { lg: "6.5vw", xs: "50vw" },
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              />
            </Grid>
            <Grid xs={3}>
              <Typography
                sx={{
                  mt: { lg: "1vw", xs: "2vw" },
                }}
              >
                from: {travelDetail.dataFrom} to: {travelDetail.dataTo}
              </Typography>
            </Grid>

            <Grid xs={1}>
              <Typography
                className="travel-card__budget"
                color="#1d3557"
                fontWeight="bold"
                sx={{
                  fontSize: { lg: "15px", xs: "13px" },
                  mt: { lg: "1vw", xs: "2vw" },
                }}
                textTransform="capitalize"
              >
                {travelDetail.budget}€
              </Typography>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sx={{
              mx: { lg: "3vw", xs: "50vw" },
              mt: { lg: "4vw", xs: "2vw" },
            }}
          >
            <Typography>{travelDetail.description}</Typography>
          </Grid>
          <Grid
            sx={{
              mx: { lg: "3vw", xs: "50vw" },
              mt: { lg: "4vw", xs: "2vw" },
            }}
          >
            <ButtonsTravelDetailContainer travel={travelDetail} />
            <>
            { userAuth &&
              userAuth.userId === travelDetail.userOwnerId 
              && travelDetail.usersWantJoin.length > 0 && <ListUsersWantJoin travel={travelDetail} /> 
            }
            </>
          </Grid>
        </Grid>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          mt="40rem"
        >
          <CircularProgress disableShrink />
        </Stack>
      )}
    </>
  );
};

export default TravelDetailContainer;
