import React, { useState, useEffect } from "react";
import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ButtonsTravelDetailContainer from "../ButtonsTravelDetailContainer/ButtonsTravelDetailContainer";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


const TravelDetailContainer = () => {
  const { id } = useParams();
  const BASEURL = "https://viajes-upgrade-hub.herokuapp.com";
  const TRAVELURL = "/travel/detail/";

  const [travel, setTravel] = useState();
  const [imgPrincipal, setimgPrincipal] = useState();

  useEffect(() => {
    fetch(`${BASEURL}${TRAVELURL}${id}`)
      .then((response) => response.json())
      .then((data) => setTravel(data));
  }, [id]);
  

  useEffect(() => {
    travel && setimgPrincipal(travel.images[0]);
  }, [travel]);


  const actualizarImgPrincipal = (image) => {
    setimgPrincipal(image);
  };
  
 


  return (
    <>
      {travel ? (
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
              {travel.title}
            </Typography>
          </Grid>
          
          <Typography>
            {travel.tags.map((tag) => <p>{tag.title}</p>)}
          </Typography>

          <Grid container spacing={2}>
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
                alt={travel.cityName}
              />
            </Grid>

            <Grid xs={4}>
              {travel.images.map((image) => {
                if (image !== imgPrincipal) {
                  return (
                    <Box
                      onClick={() => actualizarImgPrincipal(image)}
                      component="img"
                      sx={{
                        height: { lg: "20vh", xs: "10vh" },
                        width: { lg: "25vw", xs: "10vw" },
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
                {travel.cityName}
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
                from: {travel.dataFrom} to: {travel.dataTo}
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
                  {travel.budget}€
                </Typography>
            </Grid>
          </Grid>
          <Grid xs={12}
            sx={{
                  mx: { lg: "3vw", xs: "50vw" },
                  mt: { lg: "4vw", xs: "2vw" },
                }}>
                   <Typography>
                   {travel.description}
                   </Typography>
            </Grid>
            <Grid
            sx={{
                  mx: { lg: "3vw", xs: "50vw" },
                  mt: { lg: "4vw", xs: "2vw" },
                }}>
            <ButtonsTravelDetailContainer />
            </Grid>
        </Grid>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default TravelDetailContainer;
