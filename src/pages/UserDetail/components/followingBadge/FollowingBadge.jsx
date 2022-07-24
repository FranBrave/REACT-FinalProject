import * as React from "react";
import Badge from "@mui/material/Badge";
import GroupIcon from "@mui/icons-material/Group";

const FollowingBadge = ({ users }) => {
    return (
        <Badge
            badgeContent={users}
            color="warning"
            overlap="circular"
            sx={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
            }}
        >
            <GroupIcon color="action" />
        </Badge>
    );
};

export default FollowingBadge;
