import * as actions from "../actions/searchActions";

const INITIAL_STATE = {
    searchTravel: [],
    error: "",
};

export const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.SEARCH_LIST:
            return {
                searchTravel: action.payload,
                error: "",
            };

        default:
            return state;
    }
};
