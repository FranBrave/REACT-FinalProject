import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import PlayaTravelList from "./components/PlayaTravelList/PlayaTravelList";
import CiudadTravelList from "./components/CiudadTravelList/CiudadTravelList";
import NatuTravelList from "./components/NatuTravelList/NatuTravelList";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TravelsContainer = () => {
    const { travelsList } = useSelector((state) => state.travel);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setReduxTravelsList());
    }, []);
    return (
        <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
        >
            <p>Playa</p>
            <PlayaTravelList travelsList={travelsList} />;<p>Ciudad</p>
            <CiudadTravelList travelsList={travelsList} />
            <p>Natu</p>
            <NatuTravelList travelsList={travelsList} />
            {/* 
            <InterTravelList />;
            <NatuTravelList />;
            <NacionalTravelList />; */}
        </Grid>
    );
};

export default TravelsContainer;
