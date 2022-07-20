import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
<<<<<<< HEAD
import TravelList from "./components/TravelList/TravelList";
=======
import PlayaTravelList from "./components/PlayaTravelList/PlayaTravelList";
import CiudadTravelList from "./components/CiudadTravelList/CiudadTravelList";
import NatuTravelList from "./components/NatuTravelList/NatuTravelList";
>>>>>>> main
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TravelsContainer = () => {
  const { travelsList } = useSelector((state) => state.travel);
  const dispatch = useDispatch();

<<<<<<< HEAD
  useEffect(() => {
    dispatch(setReduxTravelsList());
  }, []);

  return (
    <Box>
      <h1>Playa</h1>
      <TravelList travelsList={travelsList} tipo="Playa" />
      <h1>Nacional</h1>
      <TravelList travelsList={travelsList} tipo="Nacional" />
      <h1>Ciudad</h1>
      <TravelList travelsList={travelsList} tipo="Ciudad" />
      <h1>Internacional</h1>
      <TravelList travelsList={travelsList} tipo="Internacional" />
      <h1>Naturaleza</h1>
      <TravelList travelsList={travelsList} tipo="Naturaleza" />
    </Box>
  );
=======
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
>>>>>>> main
};

export default TravelsContainer;
