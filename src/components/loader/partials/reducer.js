import types from "./types";

const initalState = {
    visible: false,
};

export function loader(state = initalState, action) {
    switch (action.type) {
        case types.SHOW_LOADER:
            return {
                ...state,
                visible: true,
            };
        case types.HIDE_LOADER:
            return {
                ...state,
                visible: false,
            };
        default:
            return state;
    }
}
