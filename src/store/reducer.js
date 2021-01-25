import types from './types';

const initalState = {
    user: undefined,
    isAuthorised: false
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
                isAuthorised: true
            }
        default:
            return state;
    }
}