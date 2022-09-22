import { createStore } from "redux";
import { ACTION_ADD_TARGETS, ACTION_LOGIN, ACTION_LOGOUT, ACTION_REMOVE_TARGETS, ACTION_REMOVE_URL, ACTION_SET_URL } from "./state_actions";

var initialState = {
    url: null,
    loggedIn: false,
    user: {
        // name: "Ramesh 12",
        // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjM3MjQxNTMsImlhdCI6MTY2MzcyMDU1MywiaXNzIjoicGluZ21hc3RlciIsImp0aSI6ImJmNDUxZTM2LWQxNzItNGNiYi04MWE5LTljMjliOTE2ZTJjOSIsIm5hbWUiOiJSYW1lc2ggMTIiLCJuYmYiOjE2NjM3MjA1NTMsInN1YiI6ImFjY2VzcyB0byBwaW5nbWFzdGVyIn0.7uin6c6xXCarhs0OKXlfiC4bxTFL7sSiOCNW38KnD_4"
    },
    targets: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTION_LOGIN:
            return {
                ...initialState,
                loggedIn: true,
                user: action.payload,
            }

        case ACTION_LOGOUT:
            return initialState

        case ACTION_ADD_TARGETS:
            return {
                ...state,
                targets: action.payload,
            }

        case ACTION_REMOVE_TARGETS:
            return {
                ...state,
                targets: [],
            }

        case ACTION_SET_URL:
            return {
                ...state,
                url: action.payload,
            }

        case ACTION_REMOVE_URL:
            return {
                ...state,
                url: "",
            }

        default:
            return state
    }
};

export const store = createStore(rootReducer);
