import { Box } from "@mui/material";
import React from "react";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";

const TravelsUsersContainer = ({ travelDisplay }) => {
  return (
    <Box>
      <Searcher />
      {travelDisplay ? <TravelsContainer /> : <UsersContainer />}
    </Box>
  );
};

export default TravelsUsersContainer;
