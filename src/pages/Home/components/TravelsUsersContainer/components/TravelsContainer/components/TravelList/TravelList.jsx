import { Link, Typography, Box, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useEffect, useState } from "react";
import { getTags } from "../../../../../../../../services/getTags";
import { getUserDetail } from "../../../../../../../../state/context/services/authContext.services";
import "./TravelList.css";
import shortid from "shortid";

const TravelList = ({ travelsList, tipo }) => {
  const [TravelList, setTravelList] = useState();
  const [ownerList, setOwnerList] = useState([]);
  const [tagsList, setTagsList] = useState();

  useEffect(() => {
    getTags().then((res) => {
      setTagsList(res);
    });
  }, []);

  useEffect(() => {
    if (tagsList) {
      const Tag = tagsList.find((tag) => tag.title === tipo);
      setTravelList(
        travelsList.filter((travel) => travel.tags.includes(Tag._id))
      );
    }
  }, [travelsList, tagsList]);

  useEffect(() => {
    const getUsersFromTravels = () => {
      const promiseArray = TravelList.map((travel) =>
        getUserDetail(travel.userOwnerId)
      );
      Promise.all(promiseArray).then((res) => setOwnerList(res));
    };

    TravelList && getUsersFromTravels();
  }, [TravelList]);

  return (
    <>
      {ownerList.length > 0 ? (
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
              textTransform="capitalize"
            >
              {tipo}
            </Typography>
          </Box>

          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            gap="0.6rem"
            sx={{ margin: { xs: "3.9px" } }}
          >
            {TravelList.map((travel) => (
              <Link key={travel.id} href={`/travel/${travel.id}`}>
                <Grid sx={{ border: "1px solid grey", m: "5px" }}>
                  <Grid
                    className="travel-card"
                    sx={{
                      background: `url(${travel.images[0]})`,
                      backgroundSize: "cover",
                      filter: "brightness(0.9)",
                      width: {
                        lg: "20vw",
                        sm: "30vw",
                        xs: "95vw",
                      },
                      height: {
                        lg: "30vh",
                        sm: "30vw",
                        xs: "70vh",
                      },
                    }}
                    loading="lazy"
                  >
                    <Typography
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
                        margin: "10px",
                        fontSize: {
                          lg: "15px",
                          xs: "13px",
                        },
                        textTransform: "capitalize",
                      }}
                    >
                      Presupuesto: {travel.budget}€
                    </Typography>
                  </Grid>

                  <Typography
                    sx={{
                      ml: "10px",
                      mt: "10px",
                      textTransform: "capitalize",
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: {
                        lg: "35px",
                        xs: "28px",
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
                    {travel.description.slice(0, 50).concat("...")}
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
                        lg: "15px",
                        xs: "13px",
                      },
                    }}
                  >
                    Creado por{" "}
                    {
                      ownerList.find(
                        (user) =>
                          user._id ===
                          ownerList
                            .map((user) => user.travelsCreated)
                            .flat()
                            .find((el) => el.id === travel.id).userOwnerId
                      ).username
                    }
                  </Typography>
                  <Typography
                    className="travel-card__data"
                    sx={{
                      ml: "10px",
                      mt: "10px",
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

                  {tagsList
                    .filter((tag) => travel.tags.includes(tag._id))
                    .map((tag) => (
                      <Typography
                        className="travel-card__tags"
                        key={shortid.generate()}
                        sx={{
                          ml: "10px",
                          m: "10px",
                          color: "gray",
                          fontWeight: "bold",
                          fontSize: {
                            lg: "13px",
                            xs: "10px",
                          },
                        }}
                      >
                        {tag.title}
                      </Typography>
                    ))}
                </Grid>
              </Link>
            ))}
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TravelList;
