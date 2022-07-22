import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useEffect, useState } from "react";
import shortid from "shortid";

const GalleryImages = ({ selectedComp, userDetail }) => {
    const [selected, setSelected] = useState();

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

    return (
        <>
            {selected && selected.length > 0 ? (
                <ImageList cols={3} gap={8} sx={{ width: "80vw" }}>
                    {selected.map((travel) => (
                        <ImageListItem key={shortid.generate()}>
                            <img
                                src={`${travel.images[0]}?w=248&fit=crop&auto=format`}
                                srcSet={`${travel.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt="travel image"
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={travel.title}
                                subtitle={travel.description}
                            />
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