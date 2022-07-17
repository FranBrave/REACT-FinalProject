import { loginUser, logoutUser, registerUser } from "../services/authContext.services";

export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";

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

/**
 * With the body parameter coming from the auth login form, use the register function or login function depending on the username value exist or not.
 * @param {*} body {username?, password, email}
 * @param {*} dispatch
 */
export const authUserProvider = async (body, dispatch) => {
    const requestBody = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };

    dispatch(actionAuthLoading());

    try {
        if (!body.username) {
            const response = await loginUser(requestBody);

            const userId = response.data.userId;
            const userToken = response.data.token;

            localStorage.setItem("userId", userId);
            localStorage.setItem("token", userToken);

            dispatch(actionLoginDone(response.data));
        }

        await registerUser(requestBody).then(() =>
            dispatch(actionRegisterDone())
        );
    } catch (error) {
        dispatch(actionAuthError(error));
    }
};

export const logoutUserProvider = async (dispatch) => {
    dispatch(actionAuthLoading());

    try {
        await logoutUser().then(() => {
            dispatch(actionLogoutDone());
        });
    } catch (error) {
        dispatch(actionAuthError(error));
    }
};
