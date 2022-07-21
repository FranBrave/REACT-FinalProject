import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { setReduxTravelsList } from "../../state/redux/actions/travelActions";
import { useDispatch, useSelector } from "react-redux";
import { setReduxSearchList } from "../../state/redux/actions/searchActions";

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
      setReduxSearchList(SearchedTravels);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "30px", xs: "20px" },
        }}
        mb="50px"
        textAlign="center"
      >
        ¿A qué lugar te gustaría ir?
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#ffff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Busca un viaje"
          type="text"
        />
        <Button
          className="search__btn"
          sx={{
            bgcolor: "#ff2625",
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
