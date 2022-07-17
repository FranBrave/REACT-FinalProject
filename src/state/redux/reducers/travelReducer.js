import * as actions from "../actions/travelActions";

const INITIAL_STATE = {
    travelDetail: {},
    travelsList: [],
    error: "",
};

export const travelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.TRAVEL_DETAIL:
            return {
                ...state,
                travelDetail: action.payload,
                error: "",
            };
        case actions.TRAVELS_LIST:
            return {
                ...state,
                travelsList: action.payload,
                error: "",
            };
        case actions.TRAVEL_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
