import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxTravelsList } from "../../../../../../../../state/redux/actions/travelActions";
import TravelList from "../TravelList/TravelList";

const TravelSearcher = () => {
  const { travelsList } = useSelector((state) => state.travel);

  const { SearchedTravels } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxTravelsList());
  }, []);

  return (
    <Box>
      {SearchedTravels && SearchedTravels.length > 0 && (
        <TravelList
          travelsList={travelsList}
          tipo="Resultados de la búsqueda"
        />
      )}
    </Box>
  );
};

export default TravelSearcher;
