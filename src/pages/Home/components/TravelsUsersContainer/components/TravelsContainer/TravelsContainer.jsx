import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import TravelList from "./components/TravelList/TravelList";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TravelsContainer = () => {
  const { travelsList } = useSelector((state) => state.travel);
  const dispatch = useDispatch();

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
};

export default TravelsContainer;
