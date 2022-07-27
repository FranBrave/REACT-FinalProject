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
import CloseIcon from "@mui/icons-material/Close";

const INITIAL_STATE = {
    title: "",
    description: "",
    dateFrom: new Date().toString(),
    dateTo: new Date().toString(),
    budget: 0,
    cityName: "",
    tags: [],
};

const TravelCreation = ({ userId, handleCloseModal }) => {
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
            }, 3500);

            handleCloseModal();
        }
    };

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Typography sx={{ textAlign: "center" }}>
                    Crea tu viaje
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
                        name="title"
                        type="text"
                        placeholder="travel's title"
                        label="Titulo"
                        onChange={handleChangeForm}
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <TextField
                        name="description"
                        type="text"
                        placeholder="travel's description"
                        label="Descripción"
                        onChange={handleChangeForm}
                        sx={{
                            width: "40vw",
                        }}
                    />
                    <TextField
                        name="budget"
                        type="number"
                        placeholder="travel's budget"
                        label="Presupuesto"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                budget: parseInt(e.target.value),
                            })
                        }
                        sx={{
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
                            label="Desde"
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
                            label="Hasta"
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
                            Nombre de la ciudad
                        </InputLabel>
                        <Select
                            labelId="cityName-label"
                            id="cityName"
                            value={form.cityName}
                            onChange={handleChangeForm}
                            autoWidth
                            name="cityName"
                            sx={{
                                width: "40vw",
                            }}
                        >
                            <MenuItem value="">
                                <em>Ninguno</em>
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
                            <InputLabel id="tags-label">Etiquetas</InputLabel>
                            {form.tags.length > 0 &&
                                form.tags.map((tag) => (
                                    <InputLabel
                                        sx={{
                                            p: "0 1.3rem",
                                            height: "2rem",
                                            backgroundColor: "#B6B6B6",
                                            color: "black",
                                            border: "1px solid #C9C9C9",
                                            borderRadius: "2rem",
                                            position: "relative",
                                            display: "flex",
                                            direction: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                        key={shortid.generate()}
                                    >
                                        {tag}
                                        <CloseIcon
                                            onClick={() => removeTag(tag)}
                                            sx={{
                                                cursor: "pointer",
                                                ml: "1rem",
                                                color: "white",
                                            }}
                                            key={shortid.generate()}
                                        >
                                            X
                                        </CloseIcon>
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
                                name="tags"
                                sx={{
                                    width: "40vw",
                                }}
                            >
                                <MenuItem value="">
                                    <em>Ninguno</em>
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
                                    borderRadius: "2rem",
                                    "&:hover": {
                                        backgroundColor: "#9ac2c9",
                                    },
                                }}
                            >
                                Añadir
                            </Button>
                        </Stack>
                    </Stack>

                    <Button
                        onClick={submitUserForm}
                        sx={{
                            p: "0.5rem 4rem",
                            backgroundColor: "#ffcb47",
                            color: "white",
                            borderRadius: "2rem",
                            "&:hover": {
                                backgroundColor: "#F0A370",
                            },
                        }}
                    >
                        Crear viaje
                    </Button>
                    {error && (
                        <Alert variant="filled" severity="error">
                            Todos los campos son requeridos!
                        </Alert>
                    )}
                    {alertDisplay && (
                        <Alert variant="filled" severity="success">
                            Viaje creado correctamente!
                        </Alert>
                    )}
                </Grid>
            </LocalizationProvider>
        </>
    );
};

export default TravelCreation;
