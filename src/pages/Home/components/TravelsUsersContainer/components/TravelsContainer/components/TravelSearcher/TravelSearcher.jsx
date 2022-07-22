import { Link, Typography, Box } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../../../../../../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../../../../../../../assets/icons/left-arrow.png";

const TravelSearcher = ({ searchTravel }) => {
    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);

        return (
            <Typography onClick={() => scrollPrev()} className="right-arrow">
                <img src={LeftArrowIcon} alt="left-arrow" />
            </Typography>
        );
    };

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);

        return (
            <Typography onClick={() => scrollNext()} className="left-arrow">
                <img src={RightArrowIcon} alt="right-arrow" />
            </Typography>
        );
    };

    return (
        <>
            {searchTravel.length > 0 && (
                <>
                    <Typography
                        ml="21px"
                        color="#84a59d"
                        fontWeight="bold"
                        sx={{ fontSize: { lg: "33px", xs: "29px" } }}
                        mt="11px"
                        pb="10px"
                        textTransform="capitalize"
                    >
                        Resultados de tu busqueda:
                    </Typography>

                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        direction="row"
                        className="travel__container"
                    >
                        {searchTravel.map((travel) => (
                            <Link key={travel.id} href={`/travel/${travel.id}`}>
                                <Box
                                    className="travel-card"
                                    sx={{
                                        background: `url(${travel.images[0]})`,
                                        backgroundSize: "cover",
                                        width: {
                                            lg: "20vw",
                                            sm: "30vw",
                                            xs: "90vw",
                                        },
                                        height: {
                                            lg: "30vh",
                                            sm: "30vw",
                                            xs: "90vh",
                                        },
                                        border: "1px solid grey",
                                        borderRadius: "30px",
                                        m: "10px",
                                    }}
                                >
                                    <Typography
                                        ml="21px"
                                        color="#84a59d"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "33px",
                                                xs: "29px",
                                            },
                                        }}
                                        mt="11px"
                                        pb="10px"
                                        textTransform="capitalize"
                                    >
                                        {travel.title}
                                    </Typography>
                                    <Typography
                                        ml="21px"
                                        color="#1d3557"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "24px",
                                                xs: "20px",
                                            },
                                        }}
                                        mt="11px"
                                        pb="10px"
                                        textTransform="capitalize"
                                    >
                                        {travel.cityName}
                                    </Typography>
                                    <Typography
                                        ml="21px"
                                        color="#1d3557"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "20px",
                                                xs: "17px",
                                            },
                                        }}
                                        mt="11px"
                                        pb="10px"
                                        textTransform="capitalize"
                                    >
                                        {travel.description}
                                    </Typography>
                                    <Typography
                                        ml="21px"
                                        color="#1d3557"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "24px",
                                                xs: "20px",
                                            },
                                        }}
                                        mt="11px"
                                        pb="10px"
                                        textTransform="capitalize"
                                    >
                                        user
                                    </Typography>
                                    <Typography
                                        className="travel-card__budget"
                                        color="#1d3557"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "15px",
                                                xs: "13px",
                                            },
                                        }}
                                        textTransform="capitalize"
                                    >
                                        {travel.budget}€
                                    </Typography>
                                    Tipo
                                    <Typography
                                        className="travel-card__data"
                                        ml="21px"
                                        mr="0px"
                                        p="0px"
                                        color="#1d3557"
                                        fontWeight="bold"
                                        sx={{
                                            fontSize: {
                                                lg: "15px",
                                                xs: "13px",
                                            },
                                        }}
                                        mt="11px"
                                        pb="10px"
                                        textTransform="none"
                                    >
                                        Desde {travel.dataFrom} hasta
                                        {travel.dataTo}
                                    </Typography>
                                </Box>
                            </Link>
                        ))}
                    </ScrollMenu>
                </>
            )}
        </>
    );
};

export default TravelSearcher;
