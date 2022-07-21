import { Box } from "@mui/material";
import React from "react";
import Searcher from "../../../../components/Searcher/Searcher";
import TravelsContainer from "./components/TravelsContainer/TravelsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import { Box } from "@mui/system";

const TravelsUsersContainer = ({ travelDisplay }) => {
  return (
    <Box>
      {" "}
      <Box>
        <Searcher />
      </Box>
      <Box>{travelDisplay ? <TravelsContainer /> : <UsersContainer />}</Box>{" "}
    </Box>
  );
};

export default TravelsUsersContainer;
