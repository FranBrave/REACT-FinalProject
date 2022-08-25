import React, { useState, useEffect, useContext } from "react";
import {
    Box,
    CircularProgress,
    Grid,
    List,
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
import "./TravelDetailContainer.css"

const TravelDetailContainer = () => {
    const { id } = useParams();
    const { travelDetail } = useSelector((state) => state.travel);
    const [imgPrincipal, setimgPrincipal] = useState();
    const { userAuth, authDispatch } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        travelDetail && setimgPrincipal(travelDetail.images[0]);
    }, [travelDetail]);

    useEffect(() => {
        dispatch(setReduxTravelDetail(id));
    }, [id]);

    const actualizarImgPrincipal = (image) => {
        setimgPrincipal(image);
    };
    if(travelDetail){{travelDetail.usersJoined.map((user) => (
        console.log(user.userName)))}}


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem">
            
            {travelDetail ? (
                <Stack
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                            sx={{ position: "relative" }}
                        >
                        <Grid
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Box>
                        <Typography
                            color="#1d3557"
                            fontWeight="bold"
                            textTransform="capitalize"
                            sx={{
                                fontSize: { lg: "40px", xs: "34px" },
                                mx: { lg: "3px", xs: "2px" },
                                mt: { lg: "4px", xs: "2px" },
                                ml: { lg: "3rem" },
                            }}
                        >
                            {travelDetail.title}
                        </Typography>
                    </Box>
                        <Box
                                component="img"
                                sx={{
                                    height: { lg: "100%", xs: "20vh" },
                                    width: { lg: "46.4vw", xs: "100%" },
                                    border: "1px solid grey",
                                    mx: { lg: "3vw", xs: "1px" },
                                    mt: { lg: "4vw", xs: "1px" },
                                }}
                                src={imgPrincipal}
                                alt={travelDetail.cityName}
                            />
                        </Grid>
                        <Grid flexDirection="row">
                            {travelDetail.images.map((image) => {
                                {
                                    return (
                                        <Box
                                            onClick={() =>
                                                actualizarImgPrincipal(
                                                    image
                                                )
                                            }
                                            component="img"
                                            className="travel-detail_gallery"
                                            sx={{
                                                height: {
                                                    lg: "15vh",
                                                    xs: "10vh",
                                                },
                                                width: {
                                                    lg: "15vw",
                                                    xs: "10vw",
                                                },
                                                border: "1px solid grey",
                                                m: "0.5rem",
                                                mt: {
                                                    lg: "1vw",
                                                    xs: "1vw",
                                                },
                                            }}
                                            src={image}
                                        />
                                    );
                                }
                            })}
                            <Typography
                                display="flex"
                                sx={{
                                    ml: "10px",
                                    color: "gray",
                                    fontWeight: "bold",
                                    fontSize: {
                                        lg: "13px",
                                        xs: "10px",
                                    },
                                }}
                            >
                                {travelDetail.tags.map((tag) => (
                                    <p>#{tag.title} </p>
                                ))}
                            </Typography>
                            <Typography
                            className="travel-detail__budget"
                            display="flex"
                            color="#1d3557"
                            background= "#ffcb47"
                            fontWeight="bold"
                            sx={{
                                fontSize: { lg: "15px", xs: "13px" },
                                mt: { lg: "1px", xs: "2px" },
                            }}
                            textTransform="capitalize"
                        >
                            {travelDetail.budget}€
                        </Typography> 
                        </Grid>
                        <Box display="flex" flexDirection="row" ml="40px"
                        align>
                        <Grid xs={1}>
                            <SvgIcon
                                component={CalendarMonthIcon}
                                sx={{}}
                            />
                        </Grid>
                        <Grid>
                            <Typography sx={{}}>
                                Desde {travelDetail.dataFrom} hasta{" "}
                                {travelDetail.dataTo}
                            </Typography>
                        </Grid>
                        </Box>
                        <Box
                        sx={{
                            mx: { lg: "3px", xs: "2px" },
                            mt: { lg: "4px", xs: "2px" },
                            ml: { lg: "3rem" },
                            mb: "20px",
                        }}
                        >
                        <Typography>{travelDetail.description}</Typography>
                    </Box>
                        <Box display="flex" flexDirection="row" ml="40px"
                            sx={{
                                mx: { lg: "3px", xs: "4px" },
                                mt: { lg: "10px", xs: "2px" },
                            }}>
                            <Grid>
                            {userAuth &&
                                    userAuth.userId ===
                                        travelDetail.userOwnerId &&
                                    travelDetail.usersWantJoin.length >
                                        0 && (
                                        <ListUsersWantJoin
                                            travel={travelDetail}
                                        />
                                    )}
                            </Grid>
                            <Grid
                        sx={{
                                mx: { lg: "3px", xs: "4px" },
                                mt: { lg: "4px", xs: "2px" },
                            }}> 
                            <ButtonsTravelDetailContainer
                            travel={travelDetail}/>
                        </Grid>
                        </Box>
                        <Box>
                        <Box>
                            {userAuth &&
                                    userAuth.userId ===
                                        travelDetail.userOwnerId &&
                                    travelDetail.usersJoined.length >
                                        0 && (
                                        <Typography>
                                            Usuarios unidos:
                                            <List>
                                               {travelDetail.usersJoined.map((user) => (
                                    <p>{user.userName} </p>))}
                                            </List>
                                            
                                        </Typography>
                                    )}
                            </Box>
                        </Box>
                </Stack>
            ):(
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
        </Grid>
);
};

export default TravelDetailContainer;
