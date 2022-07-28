import * as actions from "../actions/userActions";

const INITIAL_STATE = {
    userDetail: {},
    userList: [],
    error: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload,
                error: "",
            };
        case actions.USER_EDIT:
            return {
                ...state,
                userDetail: action.payload,
                error: "",
            };
        case actions.USERS_LIST:
            return {
                ...state,
                userList: action.payload,
                error: "",
            };
        case actions.USER_CREATE_TRAVEL:
            return {
                ...state,
                userDetail: {
                    ...state.userDetail,
                    travelsCreated: [
                        ...state.userDetail.travelsCreated,
                        action.payload,
                    ],
                },
                error: "",
            };
        case actions.USER_UPLOAD_IMG:
            return {
                ...state,
                userDetail: {
                    ...state.userDetail,
                    images: action.payload,
                },
                error: "",
            };
        case actions.USER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
              
         default:
            return state;
    }
};
