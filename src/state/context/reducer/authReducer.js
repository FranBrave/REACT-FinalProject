import * as actions from "../actions/authActions";

const userId = localStorage.getItem("userId");
const userToken = localStorage.getItem("userToken");

export const INITIAL_STATE = {
    userId: userId ? userId : "",
    userToken: userToken ? userToken : "",
    loading: false,
    done: false,
    error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.AUTH_LOADING:
            return {
                ...state,
                loading: true,
                done: false,
                error: "",
            };

        case actions.AUTH_ERROR:
            return {
                ...state,
                loading: false,
                done: false,
                error: action.payload,
            };

        case actions.REGISTER_DONE:
            return {
                ...state,
                loading: false,
                done: true,
                error: "",
            };

        case actions.LOGIN_DONE:
            return {
                userId: action.payload.userId,
                userToken: action.payload.token,
                loading: false,
                done: true,
                error: "",
            };
        case actions.LOGOUT_DONE:
            return {
                userId: "",
                userToken: "",
                loading: false,
                done: true,
                error: "",
            };
        default:
            break;
    }
};
