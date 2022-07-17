import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect } from "react";
import { setReduxUserDetail } from "../state/redux/actions/userActions";

/**
 * Custom hook to get the detail of the user coming in params
 * @param {*} username
 * @returns The user detail data object
 */
export const useUserDetail = (username) => {
    const { userDetail } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setReduxUserDetail(username));
    }, [username]);

    return userDetail;
};
