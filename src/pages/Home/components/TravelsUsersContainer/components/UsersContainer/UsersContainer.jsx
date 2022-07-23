import { Link, Box, Typography, Avatar } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUsersList } from "../../../../../../state/redux/actions/userActions";
import RightArrowIcon from "../../../../../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../../../../../assets/icons/left-arrow.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const UsersContainer = () => {
  const { userList } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setReduxUsersList());
  }, []);

  useEffect(() => {}, [userList]);

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
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        direction="row"
        className="travel__container"
      >
        {userList.map((user) => (
          <Link key={user.id} href={`/User/${user.username}`}>
            <Box
              className="user-card"
              sx={{
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
              <Avatar
                sx={{
                  width: {
                    lg: "5vw",
                    sm: "5vw",
                    xs: "5vw",
                  },
                  height: {
                    lg: "5vh",
                    sm: "5vw",
                    xs: "5vh",
                  },
                }}
                src={user.avatar}
              />

              <Typography
                ml="21px"
                color="#84a59d"
                fontWeight="bold"
                sx={{ fontSize: { lg: "33px", xs: "29px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
              >
                {user.username}
              </Typography>
              <Typography
                ml="21px"
                color="#84a59d"
                fontWeight="bold"
                sx={{ fontSize: { lg: "33px", xs: "29px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
              >
                {user.sex}
              </Typography>
              <Typography
                ml="21px"
                color="#1d3557"
                fontWeight="bold"
                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
              >
                {user.location}
              </Typography>
              <Typography
                ml="21px"
                color="#1d3557"
                fontWeight="bold"
                sx={{ fontSize: { lg: "20px", xs: "17px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
              >
                {user.bio.slice(0, 100).concat("...")}
              </Typography>
              <Typography
                ml="21px"
                color="#1d3557"
                fontWeight="bold"
                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
              >
                {user.preferences}
              </Typography>
            </Box>
          </Link>
        ))}
      </ScrollMenu>
    </>
  );
};

export default UsersContainer;
