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
      <TravelList travelsList={travelsList} tipo="tipo" />
    </Box>
  );
};

export default TravelsContainer;
