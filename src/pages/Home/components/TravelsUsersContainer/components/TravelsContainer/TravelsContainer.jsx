import { Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserDetailById } from "../../../../../../customHook/useUserDetailById";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import './TravelsContainer.css';

const TravelsContainer = () => {
    const { travelsList } = useSelector((state) => state.travel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setReduxTravelsList());
    }, []);

    return (
        
        <Stack direction="row">
            {travelsList.map((travel) => (
                <Link
                    className="travel-card"
                    sx={{  
                        width:  { lg: '900px', xs: '300px'  },
                        height: { lg: '800px', xs: '750px'  },
                        border: "1px solid grey",
                        borderRadius: '30px',
                        m: '10px'
                    }}
                    key={travel.id}
                    href={`/travel/${travel.title}`}
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
                        Destino {travel.cityName}   
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
                        sx={{ fontSize: { lg: "18px", xs: "15px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="none"
                    >
                        Creado por {travel.userOwnerId}
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
                        ml="21px"
                        color="#1d3557"
                        fontWeight="bold"
                        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        {useUserDetailById(travel.userOwnerId).username}
                    </Typography>
                </Link>
            ))}
        </Stack>
    );
};

export default TravelsContainer;
