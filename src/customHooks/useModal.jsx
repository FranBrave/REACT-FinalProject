import { useContext } from "react";
import { toggleAuthModal } from "../state/context/actions/modalActions";
import { AuthContext } from "../state/context/authContext";

export const UseModal = () => {
    const { modalState, modalDispatch } = useContext(AuthContext);

    toggleAuthModal(modalState.open, modalDispatch);
};
