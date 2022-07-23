import React, { useEffect, useState, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tabs, Tab } from "@mui/material";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import TravelList from "./components/TravelList/TravelList";
import TravelSearcher from "./components/TravelSearcher/TravelSearcher";
import { TabPanel, TabContext, TabList } from "@mui/lab";

const TravelsContainer = () => {
  const { travelsList } = useSelector((state) => state.travel);
  const { searchTravel } = useSelector((state) => state.search);
  const [value, setValue] = useState("1");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxTravelsList());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TravelSearcher searchTravel={searchTravel} />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Playa" value="1" />
            <Tab label="Nacional" value="2" />
            <Tab label="Ciudad" value="3" />
            <Tab label="Internacional" value="4" />
            <Tab label="Naturaleza" value="5" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <TravelList travelsList={travelsList} tipo="Playa" />
        </TabPanel>
        <TabPanel value="2">
          <TravelList travelsList={travelsList} tipo="Nacional" />
        </TabPanel>
        <TabPanel value="3">
          <TravelList travelsList={travelsList} tipo="Ciudad" />
        </TabPanel>
        <TabPanel value="4">
          <TravelList travelsList={travelsList} tipo="Internacional" />
        </TabPanel>
        <TabPanel value="5">
          <TravelList travelsList={travelsList} tipo="Naturaleza" />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default TravelsContainer;
