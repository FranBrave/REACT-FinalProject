import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ButtonsTravelDetailContainer from "../ButtonsTravelDetailContainer/ButtonsTravelDetailContainer";


const TravelDetailContainer = () => {
  const { id } = useParams();
  const BASEURL = "https://viajes-upgrade-hub.herokuapp.com";
  const TRAVELURL = "/travel/detail/";

  const [travel, setTravel] = useState();

  useEffect(() => {
    fetch(`${BASEURL}${TRAVELURL}${id}`)
      .then((response) => response.json())
      .then((data) => setTravel(data));
  }, [id]);

  

  console.log(travel);

  return (
    <>
      {travel ? (
        <div>
          <Grid container spacing={2}>
            <Box
              component="img"
              sx={{
                height: { lg: "50vh", xs: "40vh" },
                width: { lg: "50vw", xs: "100vw" },
                border: "1px solid grey",
                mx: { lg: "3vw", xs: "50vw" },
                mt: { lg: "4vw", xs: "2vw" },
              }}
              src={travel.images[0]}
              alt={travel.cityName}
            />

            <Grid>
              <Box component="img"
              sx={{
                height: { lg: "50vh", xs: "40vh" },
                width: { lg: "50vw", xs: "100vw" },
                border: "1px solid grey",
                mx: { lg: "3vw", xs: "50vw" },
                mt: { lg: "4vw", xs: "2vw" },
              }} 
              src={travel.images[1]}
              />
              
                
              
            </Grid>

            <Grid>
              <Typography
                color="#1d3557"
                fontWeight="bold"
                textTransform="capitalize"
                sx={{
                  mt: { lg: "4vw", xs: "2vw" },
                }}
              >
                Viaje a {travel.title}
              </Typography>
              <Typography>
                from: {travel.dataFrom} to: {travel.dataTo}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              mx: { lg: "3vw", xs: "50vw" },
            }}
          >
            {travel.cityName}
          </Typography>
          {travel.tags.map((tag) => (
            <p> {tag.title} </p>
          ))}
          <p>{travel.description}</p>

          <p></p>
          <p>{travel.budget}</p>
          <p>Users following {travel.usersFollowing.length}</p>
          <ButtonsTravelDetailContainer />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default TravelDetailContainer;
