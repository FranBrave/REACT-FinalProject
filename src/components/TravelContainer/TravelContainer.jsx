import React, { useState, useEffect } from "react";
import { Box, Stack, Link, Typography } from "@mui/material";

const TravelContainer = () => {
    const BASEURL = "https://viajes-upgrade-hub.herokuapp.com";
    const TRAVELURL = "/home/travels";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        fetch(BASEURL + TRAVELURL)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTravels(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Link className="travel-card">
                <Stack direction="row">
                    {" "}
                    {travels.map((travel) => (
                        <Box
                            sx={{
                                width: 300,
                                height: 300,
                                border: "1px dashed grey",
                            }}
                            key={travel.id}
                        >
                            <Typography
                                ml="21px"
                                color="#84a59d"
                                fontWeight="bold"
                                sx={{ fontSize: { lg: "33px", xs: "29px" } }}
                                mt="11px"
                                pb="10px"
                                textTransform="capitalize"
                            >
                                {travel.title}
                            </Typography>
                            <Typography
                                ml="21px"
                                color="#1d3557"
                                fontWeight="bold"
                                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                                mt="11px"
                                pb="10px"
                                textTransform="capitalize"
                            >
                                {travel.cityName}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Link>
        );
    }
};

export default TravelContainer;
