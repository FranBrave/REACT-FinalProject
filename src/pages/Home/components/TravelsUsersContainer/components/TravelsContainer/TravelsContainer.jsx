import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import TravelList from "./components/TravelList/TravelList";
import TravelSearcher from "./components/TravelSearcher/TravelSearcher";

const TravelsContainer = () => {
  const { travelsList } = useSelector((state) => state.travel);
  const { searchTravel } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxTravelsList());
  }, []);

  return (
    <Box>
      <TravelSearcher searchTravel={searchTravel} />
      <TravelList travelsList={travelsList} tipo="Playa" />
      <TravelList travelsList={travelsList} tipo="Nacional" />
      <TravelList travelsList={travelsList} tipo="Ciudad" />
      <TravelList travelsList={travelsList} tipo="Internacional" />
      <TravelList travelsList={travelsList} tipo="Naturaleza" />
    </Box>
  );
};

export default TravelsContainer;
