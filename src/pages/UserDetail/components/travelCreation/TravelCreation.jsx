import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    Alert,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import { getCities } from "../../../../services/getCities";
import { getTags } from "../../../../services/getTags";
import { Box } from "@mui/system";

const INITIAL_STATE = {
    title: "",
    description: "",
    dateFrom: "",
    dateTo: "",
    budget: 0,
    cityName: "",
    tags: [],
};

const TravelCreation = () => {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [form, setForm] = useState(INITIAL_STATE);
    const [cities, setCities] = useState();
    const [tags, setTags] = useState();
    const [alertDisplay, setAlertDisplay] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        getCities().then((res) => setCities(res));
        getTags().then((res) => setTags(res));
    }, []);

    const submitUserForm = () => {
        if (
            form.title === "" ||
            form.description === "" ||
            form.budget === 0 ||
            form.cityName === 0 ||
            form.tags.length < 1
        ) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        } else {
            const data = {
                form,
                userId,
            };
            dispatch(setReduxAddTravel(data));
            setForm(INITIAL_STATE);
            setAlertDisplay(true);

            setTimeout(() => {
                setAlertDisplay(false);
            }, 2000);
        }
    };

    return (
        <>
            {cities && tags && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography>Creation travel form</Typography>
                    <Box sx={{ width: "70%" }}>
                        <Stack>
                            <TextField
                                name="title"
                                type="text"
                                placeholder="travel's title"
                                label="Title"
                                onChange={handleChangeForm}
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                }}
                            />
                            <TextField
                                name="description"
                                type="text"
                                placeholder="travel's description"
                                label="Description"
                                onChange={handleChangeForm}
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                }}
                            />
                            <DatePicker
                                openTo="year"
                                views={["year", "month", "day"]}
                                label="From"
                                value={fromDate}
                                onChange={(newValue) => {
                                    setFromDate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} helperText={null} />
                                )}
                            />
                            <DatePicker
                                openTo="year"
                                views={["year", "month", "day"]}
                                label="To"
                                value={toDate}
                                onChange={(newValue) => {
                                    setToDate(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} helperText={null} />
                                )}
                            />
                            <TextField
                                name="budget"
                                type="number"
                                placeholder="travel's budget"
                                label="Budget"
                                onChange={handleChangeForm}
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                }}
                            />
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="cityName-label">
                                    City Name
                                </InputLabel>
                                <Select
                                    labelId="cityName-label"
                                    id="cityName"
                                    value={form.cityName}
                                    onChange={handleChangeForm}
                                    autoWidth
                                    name="cityName"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {cities.map((city) => (
                                        <MenuItem value={city.cityName}>
                                            {city.cityName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="tags-label">Tags</InputLabel>
                                <Select
                                    labelId="tags-label"
                                    id="tags"
                                    value={form.tags}
                                    onChange={handleChangeForm}
                                    autoWidth
                                    name="tags"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {tags.map((tag) => (
                                        <MenuItem value={tag.title}>
                                            {tag.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Stack>
                        <Button onClick={submitUserForm}>Create Travel</Button>
                        {error && (
                            <Alert variant="filled" severity="error">
                                All the fields are required!
                            </Alert>
                        )}
                        {alertDisplay && (
                            <Alert variant="filled" severity="success">
                                Travel successfully created!
                            </Alert>
                        )}
                    </Box>
                </LocalizationProvider>
            )}
        </>
    );
};

export default TravelCreation;
