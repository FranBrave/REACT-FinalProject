import { Link, Typography, Box, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import React from "react";

const TravelSearcher = ({ searchTravel }) => {
  return (
    <>
      {searchTravel.length > 0 && (
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
              Resultados
            </Typography>
          </Box>
          <Box className="travel">
            <Grid
              container
              spacing={0}
              alignItems="center"
              justifyContent="center"
              gap="0.6rem"
            >
              {searchTravel.map((travel) => (
                <Link key={travel.id} href={`/travel/${travel.id}`}>
                  <Grid
                    className="travel-card1"
                    sx={{
                      border: "1px solid none",
                      m: "5px",
                      borderRadius: "10px",
                      boxShadow: " 0px 18px 30px -10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Grid
                      className="travel-card__image"
                      position="relative"
                      sx={{
                        background: `url(${travel.images[0]})`,
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        backgroundSize: "cover",
                        filter: "brightness(0.9)",

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
                    >
                      <Typography
                        className="travel-card__location"
                        sx={{
                          ml: "10px",
                          pt: "5px",
                          fontWeight: "900",
                          color: "#2b2d42",
                          textTransform: "capitalize",
                          fontSize: {
                            lg: "33px",
                            xs: "29px",
                          },
                        }}
                      >
                        <LocationOnIcon />
                        {travel.cityName}
                      </Typography>

                      <Typography
                        className="travel-card__budget"
                        sx={{
                          color: "black",
                          fontWeight: "900",
                          m: "10px",

                          fontSize: {
                            lg: "15px",
                            xs: "13px",
                          },
                        }}
                      >
                        <EuroIcon
                          sx={{
                            mt: "1px",
                            pr: "5px",
                            color: "#ffcb47",
                          }}
                        />{" "}
                        <Typography
                          sx={{ mt: "2px", mr: "px", fontWeight: 900 }}
                        >
                          {travel.budget}{" "}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Typography
                      sx={{
                        ml: "10px",
                        mt: "10px",
                        textTransform: "none",
                        color: "#ffcb47",
                        fontWeight: "bold",
                        fontSize: {
                          lg: "25px",
                          xs: "20px",
                        },
                      }}
                    >
                      {travel.title}
                    </Typography>
                    <Typography
                      sx={{
                        ml: "10px",
                        mt: "10px",
                        pb: "10px",
                        textTransform: "capitalize",
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: {
                          lg: "16px",
                          xs: "12px",
                        },
                      }}
                    >
                      {travel.description.slice(0, 30).concat("...")}
                    </Typography>
                    <Typography
                      className="travel-card__data"
                      sx={{
                        m: "10px",
                        pb: "10px",

                        color: "gray",
                        fontWeight: "bold",
                        fontSize: {
                          lg: "15px",
                          xs: "10px",
                        },
                      }}
                    >
                      {travel.dataFrom.slice(0, 10).replace(/-/g, "/")} -
                      {travel.dataTo.slice(0, 10).replace(/-/g, "/")}
                    </Typography>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default TravelSearcher;
