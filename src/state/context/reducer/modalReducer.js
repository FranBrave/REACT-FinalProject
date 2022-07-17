import * as actions from "../actions/modalActions";

export const INITIAL_STATE = {
    open: false,
};
export const modalReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case actions.MODAL_OPEN:
            return {
                open: action.payload,
            };
        case actions.MODAL_CLOSED:
            return {
                open: action.payload,
            };
        default:
            return state;
    }
};
