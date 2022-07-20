import { Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTags } from "../../../../../../../../services/getTags";
import { getUserDetail } from "../../../../../../../../state/context/services/authContext.services";
import "./CiudadTravelList.css";
import shortid from "shortid";

const CiudadTravelList = ({ travelsList }) => {
    const [playaTravelList, setPlayaTravelList] = useState();
    const [ownerList, setOwnerList] = useState([]);
    const [tagsList, setTagsList] = useState();

    useEffect(() => {
        getTags().then((res) => {
            setTagsList(res);
        });
    }, []);

    useEffect(() => {
        if (tagsList) {
            const playaTag = tagsList.find((tag) => tag.title === "Ciudad");
            setPlayaTravelList(
                travelsList.filter((travel) =>
                    travel.tags.includes(playaTag._id)
                )
            );
        }
    }, [travelsList, tagsList]);

    useEffect(() => {
        const getUsersFromTravels = () => {
            const promiseArray = playaTravelList.map((travel) =>
                getUserDetail(travel.userOwnerId)
            );
            Promise.all(promiseArray).then((res) => setOwnerList(res));
        };

        playaTravelList && getUsersFromTravels();
    }, [playaTravelList]);

    return (
        <>
            {ownerList.length > 0 ? (
                <Stack direction="row" className="TravelsContainer">
                    {playaTravelList.map((travel) => (
                        <Link
                            className="travel-card"
                            sx={{
                                background: `url(${travel.images[0]})`,
                                backgroundSize: "cover",
                                width: { lg: "50vw", xs: "40vw" },
                                height: { lg: "50vh", xs: "50vh" },
                                border: "1px solid grey",
                                borderRadius: "30px",
                                m: "10px",
                            }}
                            key={travel.id}
                            href={`/travel/${travel.id}`}
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
                                sx={{ fontSize: { lg: "20px", xs: "17px" } }}
                                mt="11px"
                                pb="10px"
                                textTransform="capitalize"
                            >
                                {travel.description}
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
                            <Typography
                                className="travel-card__budget"
                                color="#1d3557"
                                fontWeight="bold"
                                sx={{ fontSize: { lg: "15px", xs: "13px" } }}
                                textTransform="capitalize"
                            >
                                {travel.budget}€
                            </Typography>
                            {tagsList
                                .filter((tag) => travel.tags.includes(tag._id))
                                .map((tag) => (
                                    <Typography sx={{ color: "white" }}>
                                        {tag.title}
                                    </Typography>
                                ))}
                            <Typography
                                className="travel-card__data"
                                ml="21px"
                                mr="0px"
                                p="0px"
                                color="#1d3557"
                                fontWeight="bold"
                                sx={{ fontSize: { lg: "15px", xs: "13px" } }}
                                mt="11px"
                                pb="10px"
                                textTransform="none"
                            >
                                Desde {travel.dataFrom} hasta {travel.dataTo}
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

export default CiudadTravelList;
