import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TravelsContainer = () => {
    const { travelsList, error } = useSelector((state) => state.travel);

    console.log(travelsList);

    // const dispatch = useDispatch();

    return (
        <Stack direction="row">
            {" "}
            {travelsList.map((travel) => (
                <Link
                    className="travel-card"
                    sx={{
                        width: 300,
                        height: 300,
                        border: "1px solid grey",
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
                </Link>
            ))}
        </Stack>
    );
};

export default TravelsContainer;
