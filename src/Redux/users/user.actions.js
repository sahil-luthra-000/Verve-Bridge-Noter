import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";
import { BASE_URL } from "../../constants/config";

export const getUser = (obj) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOADING });
    try {
        // Make POST request to login endpoint
        const response = await axios.post(`${BASE_URL}/user/login`, obj);

        // Destructure response data
        const { message, token, status } = response.data;
        
        console.log(message);

        if (status === 1) {
            // Dispatch success action with token payload
            dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
        } else {
            // Handle other statuses or errors
            alert(message); // Display message to the user
            dispatch({ type: LOGIN_USER_ERROR });
        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error("Error during login:", error);
        dispatch({ type: LOGIN_USER_ERROR });
    }
};
