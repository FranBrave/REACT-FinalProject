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
import { setReduxUserEdit } from "../../../../state/redux/actions/userActions";
import { useSelector } from "react-redux/es/hooks/useSelector";

const EditForm = ({ userId, handleCloseModal }) => {
    const { userDetail } = useSelector((state) => state.user);
    const [form, setForm] = useState();
    const [cities, setCities] = useState();
    const [tags, setTags] = useState();
    const [showTag, setShowTag] = useState("");
    const [alertDisplay, setAlertDisplay] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setForm(userDetail);
    }, [userDetail]);

    const handleChangeForm = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleTags = (e) => {
        setShowTag(e.target.value);
    };

    const addTag = () => {
        const tagsTitleArray = tags.map((tag) => tag.title);
        if (
            tagsTitleArray.includes(showTag) &&
            !form.preferences.includes(showTag)
        ) {
            const tagsValue = form.preferences;
            tagsValue.push(showTag);
            setForm({ ...form, preferences: tagsValue });
        }
    };

    const removeTag = (tag) => {
        const tagsValue = form.preferences;
        tagsValue.splice(tagsValue.indexOf(tag), 1);
        setForm({ ...form, preferences: tagsValue });
    };

    useEffect(() => {
        getCities().then((res) => setCities(res));
    }, []);

    useEffect(() => {
        getTags().then((res) => setTags(res));
    }, []);

    const submitUserForm = () => {
        const data = {
            form,
            userId,
        };

        dispatch(setReduxUserEdit(data));
        setForm(userDetail);
        setAlertDisplay(true);
        handleCloseModal();

        setTimeout(() => {
            setAlertDisplay(false);
        }, 3500);
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
                        InputProps={{
                            inputProps: {
                                max: 100,
                                min: 10,
                            },
                        }}
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
                            value={form && form.sex}
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
                            value={form && form.location}
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
                            {form &&
                                form.preferences &&
                                form.preferences.length > 0 &&
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
