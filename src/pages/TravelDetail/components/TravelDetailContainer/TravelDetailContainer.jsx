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

    useEffect(() => {
        travelDetail && setimgPrincipal(travelDetail.images[0]);
    }, [travelDetail]);

    useEffect(() => {
        dispatch(setReduxTravelDetail(id));
    }, [id]);

    const actualizarImgPrincipal = (image) => {
        setimgPrincipal(image);
    };

    return (
        <>
            {travelDetail ? (
                <Grid display="flex">
                    <Grid>
                        <Grid
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Grid>
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
                            <Grid xs={4}>
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
                                                //border = {image !== imgPrincipal ? "100px solid red" : "none"}
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
                            </Grid>
                        </Grid>
                        <Grid className="city-name" display="flex" ml="40px">
                            <Grid xs={1}>
                                <SvgIcon
                                    component={PlaceIcon}
                                    sx={{
                                        mx: { lg: "3px", xs: "2px" },
                                    }}
                                />
                            </Grid>

                            <Grid xs={1}>
                                <Typography sx={{}}>
                                    {travelDetail.cityName}
                                </Typography>
                            </Grid>
                        </Grid>
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
                        <Grid
                            xs={12}
                            sx={{
                                mx: { lg: "3px", xs: "2px" },
                                mt: { lg: "4px", xs: "2px" },
                                ml: { lg: "3rem" },
                                mb: "20px",
                            }}
                        >
                            <Typography>{travelDetail.description}</Typography>
                        </Grid>

                        <Box display="flex" flexDirection="row" ml="40px">
                            <Grid xs={1}>
                                <SvgIcon
                                    component={CalendarMonthIcon}
                                    sx={{}}
                                />
                            </Grid>
                            <Grid xs={3}>
                                <Typography sx={{}}>
                                    Desde {travelDetail.dataFrom} hasta{" "}
                                    {travelDetail.dataTo}
                                </Typography>
                            </Grid>
                        </Box>
                        <Grid xs={1}>
                            <Typography
                                className="travel-card__budget"
                                display="flex"
                                color="#1d3557"
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
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <Grid
                                sx={{
                                    mx: { lg: "3px", xs: "4px" },
                                    mt: { lg: "4px", xs: "2px" },
                                }}
                            >
                                <Grid>
                                    <ButtonsTravelDetailContainer
                                        travel={travelDetail}
                                    />
                                </Grid>

                                <>
                                    {userAuth &&
                                        userAuth.userId ===
                                            travelDetail.userOwnerId &&
                                        travelDetail.usersWantJoin.length >
                                            0 && (
                                            <ListUsersWantJoin
                                                travel={travelDetail}
                                            />
                                        )}
                                </>
                            </Grid>
                        </Box>
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
