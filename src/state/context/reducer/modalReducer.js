import * as actions from "../actions/modalActions";

export const INITIAL_STATE = {
    auth: false,
    edit: false,
    create: false,
    info: false,
    image: false,
};
export const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.MODAL_OPEN:
            return {
                auth: action.payload,
            };
        case actions.MODAL_CLOSED:
            return {
                auth: action.payload,
            };
        case actions.EDIT_MODAL_OPEN:
            return {
                edit: action.payload,
            };
        case actions.EDIT_MODAL_CLOSED:
            return {
                edit: action.payload,
            };
        case actions.CREATE_MODAL_OPEN:
            return {
                create: action.payload,
            };
        case actions.CREATE_MODAL_CLOSED:
            return {
                create: action.payload,
            };
        case actions.INFO_MODAL_OPEN:
            return {
                info: action.payload,
            };
        case actions.INFO_MODAL_CLOSED:
            return {
                info: action.payload,
            };
        case actions.IMAGE_MODAL_OPEN:
            return {
                image: action.payload,
            };
        case actions.IMAGE_MODAL_CLOSED:
            return {
                image: action.payload,
            };
        default:
            return state;
    }
};
