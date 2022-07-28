import * as actions from "../actions/authActions";

const userId = localStorage.getItem("userId");
const userToken = localStorage.getItem("userToken");

export const INITIAL_STATE = {
    userId: userId ? userId : null,
    userToken: userToken ? userToken : null,
    loading: false,
    done: false,
    error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case actions.AUTH_RESET:
            return {
                userId: null,
                userToken: null,
                loading: false,
                done: false,
                error: "",
            };
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
                userId: null,
                userToken: null,
                loading: false,
                done: false,
                error: "",
            };

        default:
            return state;
    }
};
