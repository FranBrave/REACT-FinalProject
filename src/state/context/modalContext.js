import React, { useReducer } from "react";
import {
    modalReducer,
    INITIAL_STATE as modalStateContext,
} from "./reducer/modalReducer";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    /**
     * Return the state of the auth modal (open/closed)
     */
    const [modalState, modalDispatch] = useReducer(
        modalReducer,
        modalStateContext
    );

    return (
        <ModalContext.Provider
            value={{
                modalState,
                modalDispatch,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
