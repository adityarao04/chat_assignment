import { CHAT_RESPONSE } from "../../response";
import { GET_MESSAGE, GET_MESSAGE_ERROR, GET_MESSAGE_SUCCESS } from "./types";






// Posts action
export const getPosts = (payload) => {
    return async (dispatch) => {
        const res = CHAT_RESPONSE;
        dispatch({ type: GET_MESSAGE, payload: CHAT_RESPONSE });
        try{
            // const response = await pageSEOMetaServiceSSR(payload);
            dispatch({ type: GET_MESSAGE_SUCCESS, payload: res });
            // return response?.data;

        }catch(e){
            console.log("error_check", e)
            dispatch({ type: GET_MESSAGE_ERROR, message: e });
        }
    }
}