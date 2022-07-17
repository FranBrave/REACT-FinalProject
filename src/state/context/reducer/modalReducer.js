import { MODAL_CLOSED, MODAL_OPEN } from "../actions/modalActions";

const INITIAL_STATE = {
    open: false,
};
export const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                open: true,
            };
        case MODAL_CLOSED:
            return {
                open: false,
            };
        default:
            return state;
    }
};
