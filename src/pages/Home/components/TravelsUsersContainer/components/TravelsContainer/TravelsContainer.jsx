import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Tab } from "@mui/material";
import { setReduxTravelsList } from "../../../../../../state/redux/actions/travelActions";
import TravelList from "./components/TravelList/TravelList";
import TravelSearcher from "./components/TravelSearcher/TravelSearcher";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import Searcher from "../../../../../../components/Searcher/Searcher";
import "./TravelsContainer.css";

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

  function transform(value) {
    return value <= 1 ? `${value * 75}%` : value;
  }

  return (
    <>
      <Searcher />
      <TravelSearcher searchTravel={searchTravel} />
      <TabContext value={value}>
        <Box
          className="tabs-box"
          sx={{
            textColor: "none",
            display: "flex",
            justifyContent: "center",
            borderBottom: 1,
            borderColor: "divider",
            color: "orange",
            fontWeight: 900,
            fontWeight: "bold",
          }}
        >
          <TabList
            className="tab-list"
            indicatorColor="none"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            fontWeight="900"
          >
            <Tab className="tab" label="Playa" value="1" />
            <Tab className="tab" label="Nacional" value="2" />
            <Tab className="tab" label="Ciudad" value="3" />
            <Tab className="tab" label="Internacional" value="4" />
            <Tab className="tab" label="Naturaleza" value="5" />
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
