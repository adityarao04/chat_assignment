import { GET_MESSAGE, GET_MESSAGE_SUCCESS, GET_MESSAGE_ERROR } from './types';

const initialState = {
    loading: false,  // Set to false initially
    data: [],
    error: null      // Add an error field to handle errors separately
};

export default function getMessagesReducer(state = initialState, action) {
    console.log("action", action?.payload);

    switch(action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                // loading: true,
                data: action.payload,
                error: null        // Clear any previous errors when a new request is made
            };
        case GET_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null        // Clear error if request is successful
            };
        case GET_MESSAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,  // Store the error message in `error`
                data: []                // Optionally clear data on error
            };
        default:
            return state;
    }
}