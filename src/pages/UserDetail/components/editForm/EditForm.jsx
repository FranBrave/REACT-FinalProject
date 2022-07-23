import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
    name: "",
    surname: "",
    age: 0,
    bio: "",
    location: "",
    sex: "",
    preferences: [],
};

const EditForm = ({ userId }) => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [cities, setCities] = useState();
    const [tags, setTags] = useState();
    const [showTag, setShowTag] = useState("");
    const [alertDisplay, setAlertDisplay] = useState(false);
    const [error, setError] = useState();
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

    const removeTag = (tag) => {
        const tagsValue = form.tags;
        tagsValue.splice(tagsValue.indexOf(tag), 1);
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
            form.name === "" ||
            form.surname === "" ||
            form.sex === "" ||
            form.age === 0 ||
            form.location === 0 ||
            form.preferences.length < 1
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
            }, 3500);
        }
    };

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography sx={{ textAlign: "center" }}>
                    Edit user form
                </Typography>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="1rem"
                    sx={{ height: "80vh" }}
                >
                    <TextField
                        name="name"
                        type="text"
                        placeholder="User name"
                        label="User name"
                        onChange={handleChangeForm}
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <TextField
                        name="surname"
                        type="text"
                        placeholder="Surname"
                        label="Surname"
                        onChange={handleChangeForm}
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <TextField
                        name="bio"
                        type="text"
                        placeholder="Bio"
                        label="Bio"
                        onChange={handleChangeForm}
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <TextField
                        name="age"
                        type="number"
                        placeholder="Age"
                        label="Age"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                age: parseInt(e.target.value),
                            })
                        }
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <Stack>
                        <InputLabel
                            id="sex-label"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            Sex
                        </InputLabel>
                        <Select
                            labelId="sex-label"
                            id="sex"
                            value={form.sex}
                            onChange={handleChangeForm}
                            autoWidth
                            name="sex"
                            sx={{
                                width: "40vw",
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Male " key={shortid.generate()}>
                                Male
                            </MenuItem>
                            <MenuItem value="Female" key={shortid.generate()}>
                                Female
                            </MenuItem>
                        </Select>
                    </Stack>
                    <Stack>
                        <InputLabel
                            id="location-label"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            Location
                        </InputLabel>
                        <Select
                            labelId="location-label"
                            id="location"
                            value={form.location}
                            onChange={handleChangeForm}
                            autoWidth
                            name="location"
                            sx={{
                                width: "40vw",
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {cities &&
                                cities.map((city) => (
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
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ padding: "0 1rem 1rem 1rem" }}
                        >
                            <InputLabel id="tags-label">Preferences</InputLabel>
                            {form.preferences.length > 0 &&
                                form.preferences.map((tag) => (
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
                                            onClick={() => removeTag(tag)}
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
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ width: "40vw" }}
                        >
                            <Select
                                labelId="tags-label"
                                id="tags"
                                value={showTag}
                                onChange={handleTags}
                                autoWidth
                                name="preferences"
                                sx={{
                                    width: "40vw",
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {tags &&
                                    tags.map((tag) => (
                                        <MenuItem
                                            value={tag.title}
                                            key={tag.id}
                                        >
                                            {tag.title}
                                        </MenuItem>
                                    ))}
                            </Select>
                            <Button
                                onClick={addTag}
                                sx={{
                                    p: "0 2rem",
                                    backgroundColor: "#b9d8c2",
                                    lineHeight: "1rem",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#9ac2c9",
                                    },
                                }}
                            >
                                Add
                            </Button>
                        </Stack>
                    </Stack>

                    <Button
                        onClick={submitUserForm}
                        sx={{
                            p: "0.5rem 4rem",
                            backgroundColor: "#ffcb47",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#F0A370",
                            },
                        }}
                    >
                        Edit
                    </Button>
                    {error && (
                        <Alert
                            variant="filled"
                            severity="error"
                            sx={{ position: " absolute" }}
                        >
                            All the fields are required!
                        </Alert>
                    )}
                    {alertDisplay && (
                        <Alert
                            variant="filled"
                            severity="success"
                            sx={{ position: " absolute" }}
                        >
                            Travel successfully created!
                        </Alert>
                    )}
                </Grid>
            </LocalizationProvider>
        </>
    );
};

export default EditForm;
