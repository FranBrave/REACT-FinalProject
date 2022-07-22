import React from "react";
import CreateModal from "./components/createModal/CreateModal";

import EditModal from "./components/editModal/EditModal";

const UserModal = () => {
    return (
        <>
            <EditModal />
            <CreateModal />
        </>
    );
};

export default UserModal;
