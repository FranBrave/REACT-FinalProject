import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import FollowingBadge from "../followingBadge/FollowingBadge";

const GalleryImages = ({ selectedComp, userDetail }) => {
    const [selected, setSelected] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (userDetail) {
            const infoSelected = Object.entries(userDetail).filter(
                (item) =>
                    item[0].toLowerCase() ===
                    selectedComp
                        .split(" ")
                        .join("")
                        .toLowerCase()
            );

            setSelected(infoSelected.flat()[1]);
        }
    }, [selectedComp, userDetail]);

    const navigateFunction = (travelId) => {
        navigate(`/travel/${travelId}`);
    };

    return (
        <>
            {selected && selected.length > 0 ? (
                <ImageList cols={3} gap={8} sx={{ width: "80vw" }}>
                    {selected.map((travel) => (
                        <ImageListItem
                            key={shortid.generate()}
                            sx={{
                                height: "20vw",
                                cursor: "pointer",
                                borderRadius: "2rem",
                            }}
                            onClick={() => navigateFunction(travel.id)}
                        >
                            <img
                                src={`${travel.images[0]}?w=248&fit=crop&auto=format`}
                                srcSet={`${travel.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt="travel image"
                                loading="lazy"
                                sx={{ height: "100%", borderRadius: "2rem" }}
                            />
                            <ImageListItemBar
                                title={travel.title}
                                subtitle={travel.description}
                            />
                            {travel.usersWantJoin.length > 0 && (
                                <FollowingBadge
                                    users={travel.usersWantJoin.length}
                                />
                            )}
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (
                <p>Any travel added to this list yet</p>
            )}
        </>
    );
};

export default GalleryImages;
