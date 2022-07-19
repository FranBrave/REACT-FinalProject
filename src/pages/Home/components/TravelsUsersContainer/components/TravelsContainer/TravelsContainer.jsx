import { Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../../../../../state/context/services/authContext.services";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";

const TravelsContainer = () => {
    const { travelsList } = useSelector((state) => state.travel);
    const [ownerList, setOwnerList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setReduxTravelsList());
    }, []);

    useEffect(() => {
        const getUsersFromTravels = () => {
            const promiseArray = travelsList.map((travel) =>
                getUserDetail(travel.userOwnerId)
            );
            Promise.all(promiseArray).then((res) => setOwnerList(res));
        };

        getUsersFromTravels();
    }, [travelsList]);

    return (
        <>
            {ownerList.length > 0 ? (
                <Stack direction="row">
                    {travelsList.map((travel) => (
                        <Link
                            className="travel-card"
                            sx={{
                                width: 300,
                                height: 300,
                                border: "1px solid grey",
                            }}
                            key={travel.id}
                            href = {`/Travel/${travel.id}`}
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
                            <Typography
                                ml="21px"
                                color="#1d3557"
                                fontWeight="bold"
                                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                                mt="11px"
                                pb="10px"
                                textTransform="capitalize"
                            >
                                {
                                    ownerList.find(
                                        (user) =>
                                            user._id ===
                                            ownerList
                                                .map(
                                                    (user) =>
                                                        user.travelsCreated
                                                )
                                                .flat()
                                                .find(
                                                    (el) => el.id === travel.id
                                                ).userOwnerId
                                    ).username
                                }
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            ) : (
                ""
            )}
        </>
    );
};

export default TravelsContainer;
