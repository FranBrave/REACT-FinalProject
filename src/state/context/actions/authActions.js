import {
    loginUser,
    logoutUser,
    registerUser,
} from "../services/authContext.services";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_RESET = "AUTH_RESET";
export const REGISTER_DONE = "REGISTER_DONE";
export const LOGIN_DONE = "LOGIN_DONE";
export const LOGOUT_DONE = "LOGOUT_DONE";

const actionAuthLoading = () => ({
    type: AUTH_LOADING,
});

const actionAuthError = (error) => ({
    type: AUTH_ERROR,
    payload: error,
});

const actionRegisterDone = () => ({
    type: REGISTER_DONE,
});

const actionLoginDone = (data) => ({
    type: LOGIN_DONE,
    payload: data,
});

const actionLogoutDone = () => ({
    type: LOGOUT_DONE,
});

const actionReset = () => ({
    type: AUTH_RESET,
});

/**
 * With the body parameter coming from the auth login form, use the register function or login function depending on the username value exist or not.
 * @param {*} body {username?, password, email}
 * @param {*} dispatch
 */
export const authUserProvider = async (body, dispatch) => {
    dispatch(actionAuthLoading());

    try {
        if (!body.username) {
            const response = await loginUser(body);

            const userId = response.userId;
            const userToken = response.token;

            localStorage.setItem("userId", userId);
            localStorage.setItem("token", userToken);

            dispatch(actionLoginDone({ userId, userToken }));
            return;
        }

        await registerUser(body).then(() => dispatch(actionRegisterDone()));
        return;
    } catch (error) {
        dispatch(actionAuthError(error.response.data));
        return;
    }
};

export const logoutUserProvider = async (dispatch) => {
    dispatch(actionAuthLoading());

    try {
        await logoutUser().then(() => {
            dispatch(actionLogoutDone());
            localStorage.clear();
            return;
        });
    } catch (error) {
        dispatch(actionAuthError(error));
        return;
    }
};

export const resetAuthProvider = (dispatch) => {
    dispatch(actionReset());
    return;
};
