import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { setReduxTravelsList } from "../../state/redux/actions/travelActions";
import { useDispatch, useSelector } from "react-redux";
import { setReduxSearchList } from "../../state/redux/actions/searchActions";
import background from "../../assets/backgroundmap.png";

const Searcher = () => {
  const { travelsList } = useSelector((state) => state.travel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxTravelsList());
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      const SearchedTravels = travelsList.filter(
        (travel) =>
          travel.title.toLowerCase().includes(search) ||
          travel.description.toLowerCase().includes(search) ||
          travel.cityName.toLowerCase().includes(search)
      );
      setSearch("");
      dispatch(setReduxSearchList(SearchedTravels));
    }
  };
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${background})`,
        minWidth: "50%",
        minHeight: "50vh",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll",
        listStyle: "none",
      }}
    >
      <Box position="relative" mb="30px">
        <TextField
          sx={{
            label: "none",
            input: {
              fontWeight: "900",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#ffff",
            borderRadius: "4px",
          }}
          height="80px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="¿A qué lugar te gustaría ir?"
          type="text"
        />
        <Button
          className="search__btn"
          sx={{
            bgcolor: "#ffcb47",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>
    </Stack>
  );
};

export default Searcher;
