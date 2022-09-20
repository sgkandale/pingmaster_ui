import { createStore } from "redux";
import { ACTION_LOGIN, ACTION_LOGOUT, ACTION_REMOVE_TARGETS, ACTION_REMOVE_URL, ACTION_SET_URL } from "./state_actions";

var initialState = {
    url: null,
    loggedIn: false,
    user: {},
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
