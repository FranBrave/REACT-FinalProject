import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";

const TravelsUsersContainer = ({ selectedComp }) => {
  const [travelDisplay, setTravelDisplay] = useState();

  useEffect(() => {
    setTravelDisplay(selectedComp);
  }, [selectedComp]);

  return (
    <Box>
      {travelDisplay === "Travels" ? <TravelsContainer /> : <UsersContainer />}
    </Box>
  );
};

export default TravelsUsersContainer;
