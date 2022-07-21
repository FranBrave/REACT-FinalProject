import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    Alert,
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import { getCities } from "../../../../services/getCities";
import { getTags } from "../../../../services/getTags";
import { useDispatch } from "react-redux/es/exports";
import shortid from "shortid";
import { setReduxAddTravel } from "../../../../state/redux/actions/travelActions";

const INITIAL_STATE = {
    title: "",
    description: "",
    dateFrom: new Date().toString(),
    dateTo: new Date().toString(),
    budget: 0,
    cityName: "",
    tags: [],
};

const TravelCreation = ({ userId }) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [cities, setCities] = useState();
    const [tags, setTags] = useState();
    const [showTag, setShowTag] = useState("");
    const [alertDisplay, setAlertDisplay] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChangeForm = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleTags = (e) => {
        setShowTag(e.target.value);
    };

    const addTag = () => {
        const tagsTitleArray = tags.map((tag) => tag.title);
        if (tagsTitleArray.includes(showTag) && !form.tags.includes(showTag)) {
            const tagsValue = form.tags;
            tagsValue.push(showTag);
            setForm({ ...form, tags: tagsValue });
        }
    };

    const removeTag = () => {
        const tagsValue = form.tags;
        tagsValue.splice(tagsValue.indexOf(showTag), 1);
        setForm({ ...form, tags: tagsValue });
    };

    useEffect(() => {
        getCities().then((res) => setCities(res));
    }, []);

    useEffect(() => {
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
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap="1rem"
                    >
                        <TextField
                            name="title"
                            type="text"
                            placeholder="travel's title"
                            label="Title"
                            onChange={handleChangeForm}
                            sx={{
                                mt: 2,
                                mb: 2,
                                width: "40vw",
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
                                width: "40vw",
                            }}
                        />
                        <TextField
                            name="budget"
                            type="number"
                            placeholder="travel's budget"
                            label="Budget"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    budget: parseInt(e.target.value),
                                })
                            }
                            sx={{
                                mt: 2,
                                mb: 2,
                                width: "40vw",
                            }}
                        />
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                width: "40vw",
                                justifyContent: "center",
                            }}
                        >
                            <DatePicker
                                openTo="year"
                                views={["year", "month", "day"]}
                                label="From"
                                name="dateFrom"
                                value={form.dateFrom}
                                onChange={(e) =>
                                    setForm({ ...form, dateFrom: e.toString() })
                                }
                                renderInput={(params) => (
                                    <TextField {...params} helperText={null} />
                                )}
                            />
                            <DatePicker
                                openTo="year"
                                views={["year", "month", "day"]}
                                label="To"
                                name="dateTo"
                                value={form.dateTo}
                                onChange={(e) =>
                                    setForm({ ...form, dateTo: e.toString() })
                                }
                                renderInput={(params) => (
                                    <TextField {...params} helperText={null} />
                                )}
                            />
                        </Stack>
                        <Stack>
                            <InputLabel
                                id="cityName-label"
                                sx={{
                                    textAlign: "left",
                                }}
                            >
                                City Name
                            </InputLabel>
                            <Select
                                labelId="cityName-label"
                                id="cityName"
                                value={form.cityName}
                                onChange={handleChangeForm}
                                autoWidth
                                name="cityName"
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    width: "40vw",
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {cities.map((city) => (
                                    <MenuItem
                                        value={city.cityName}
                                        key={city.id}
                                    >
                                        {city.cityName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Stack>
                        <Stack>
                            <Stack direction="row" spacing={1}>
                                <InputLabel id="tags-label">Tags</InputLabel>
                                {form.tags.map((tag) => (
                                    <InputLabel
                                        sx={{
                                            p: "0 2rem",
                                            height: "2rem",
                                            backgroundColor: "gray",
                                            color: "white",
                                            borderRadius: "0.5rem",
                                            position: "relative",
                                            display: "flex",
                                            direction: "row",
                                            alignItems: "center",
                                        }}
                                        key={shortid.generate()}
                                    >
                                        {tag}
                                        <Button
                                            onClick={removeTag}
                                            sx={{
                                                color: "white",
                                                position: "absolute",
                                                right: 0,
                                                width: 0,
                                            }}
                                            key={shortid.generate()}
                                        >
                                            X
                                        </Button>
                                    </InputLabel>
                                ))}
                            </Stack>
                            <Select
                                labelId="tags-label"
                                id="tags"
                                value={showTag}
                                onChange={handleTags}
                                autoWidth
                                name="tags"
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    width: "40vw",
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {tags.map((tag) => (
                                    <MenuItem value={tag.title} key={tag.id}>
                                        {tag.title}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button onClick={addTag}>Add Tag</Button>
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
                    </Grid>
                </LocalizationProvider>
            )}
        </>
    );
};

export default TravelCreation;
