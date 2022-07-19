import { CardMedia, ImageListItem, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../../../../../state/context/services/authContext.services";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import './TravelsContainer.css';
import TravelTagsCont from "./TravelTagsCont/TravelTagsCont";

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


        // const getTagsFromTravels = () => {
        //     const promiseArray = travelsList.map((travel) =>
        //         getTravelDetail(travel.tags)
        //     );
        //     Promise.all(promiseArray).then((res) => setTagsList(res));
        // };

        getUsersFromTravels();
        // getTagsFromTravels();
    }, [travelsList]);

    return (
        <>
    {ownerList.length > 0 ? (
        <Stack direction="row" className="TravelsContainer">
            {travelsList.map((travel) => (
                <Link
                    className="travel-card"
            sx={{  
             background: `url(${travel.images[0]})`, backgroundSize: "cover",
                height: "50vh",
                width:  { lg: '900px', xs: '300px'  },
                height: { lg: '800px', xs: '750px'  },
                border: "1px solid grey",
                borderRadius: '30px',
                m: '10px'
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
                    <Typography
            className="travel-card__data"
                ml="21px"
                mr='0px'
                p='0px'
                color="#1d3557"
                fontWeight="bold"
                sx={{ fontSize: { lg: "15px", xs: "13px" } }}
                mt="11px"
                pb="10px"
                textTransform="none"
            >
                Desde {travel.dataFrom} hasta {travel.dataTo} 
            </Typography>
            <Typography
            className="travel-card__data"
                ml="21px"
                mr='0px'
                p='0px'
                color="#1d3557"
                fontWeight="bold"
                sx={{ fontSize: { lg: "15px", xs: "13px" } }}
                mt="11px"
                pb="10px"
                textTransform="none"
            >
             {travel.tags} 
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
