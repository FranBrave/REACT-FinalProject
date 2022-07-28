import * as actions from "../actions/travelActions";

const INITIAL_STATE = {
    travelDetail: null,
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
        case actions.PUSH_TRAVEL:
            return {
                ...state,
                travelsList: [...state.travelsList, action.payload],
                error: "",
            };
        case actions.TRAVEL_WANT_LIST:
            return {
                ...state,
                travelDetail: {
                    ...state.travelDetail,
                    usersWantJoin: action.payload,
                },
                error: "",
            };
        case actions.TRAVEL_FOLLOW_LIST:
            return {
                ...state,
                travelDetail: {
                    ...state.travelDetail,
                    usersFollowing: action.payload,
                },
                error: "",
            };
        case actions.TRAVEL_JOINED_LIST:
            return {
                ...state,
                travelDetail: {
                    ...state.travelDetail,
                    usersJoined: action.payload,
                },
                error: "",
            };
        case actions.TRAVEL_WANT_LIST_DELETE:
            return {
                ...state,
                travelDetail: {
                    ...state.travelDetail,
                    usersWantJoin: action.payload,
                },
                error: "",
            };

        default:
            return state;
    }
};
