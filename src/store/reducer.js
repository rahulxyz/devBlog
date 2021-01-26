import types from './types';

const initalState = {
    user: undefined,
    isAuthorised: false,
    error: ""
}

export function auth(state=initalState, action){
    switch(action.type){
        case types.LOGIN_REQUEST:
            return {
                ...state,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorised: true,
                error: ""
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                error: "Unable to Login. Please check credentials!"
            }
        default:
            return state;
    }
}