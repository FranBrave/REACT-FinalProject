import {
    ImageListItem,
    Avatar,
    Button,
    Grid,
    ImageList,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import shortid from "shortid";

const UserInfo = ({ userDetail }) => {
    return (
        <>
            {userDetail && (
                <Grid>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="1rem"
                        sx={{ width: "70vw" }}
                    >
                        <Stack
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                        >
                            <Avatar
                                sx={{ width: 224, height: 224 }}
                                src={userDetail.avatar}
                            />
                            <Typography sx={{ fontSize: "20px" }}>
                                {userDetail.username}
                            </Typography>
                        </Stack>

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="start"
                            justifyContent="center"
                            gap="1rem"
                            sx={{ width: "70%" }}
                        >
                            <Stack
                                container
                                spacing={0}
                                direction="row"
                                alignItems="start"
                                justifyContent="center"
                                gap="5px"
                            >
                                <Typography>{userDetail.name}</Typography>
                                <Typography>{userDetail.surname}</Typography>
                            </Stack>

                            <Typography>{userDetail.bio}</Typography>
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justifyContent="start"
                                gap="1rem"
                            >
                                <Stack
                                    container
                                    spacing={0}
                                    direction="row"
                                    alignItems="start"
                                    justifyContent="center"
                                    gap="5px"
                                >
                                    <LocationOnIcon sx={{ color: "red" }} />
                                    {userDetail.location}
                                </Stack>
                                <Stack
                                    container
                                    spacing={0}
                                    direction="row"
                                    alignItems="start"
                                    justifyContent="center"
                                    gap="5px"
                                >
                                    <AccessTimeIcon sx={{ color: "blue" }} />
                                    {userDetail.age} years
                                </Stack>
                                <Button
                                    sx={{
                                        p: "0.5rem 4rem",
                                        backgroundColor: "#8AA1B1",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#9ac2c9",
                                        },
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    sx={{
                                        p: "0.5rem 4rem",
                                        backgroundColor: "#ffcb47",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#F0A370",
                                        },
                                    }}
                                >
                                    Create travel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {userDetail.images && (
                        <ImageList variant="masonry" cols={3} gap={8}>
                            {userDetail.images.map((item) => (
                                <ImageListItem key={shortid.generate()}>
                                    <img
                                        src={`${item}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Grid>
            )}
        </>
    );
};

export default UserInfo;
