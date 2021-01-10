import types from './types';

const initalState = {
    user: undefined
}

export function auth(state=initalState, action){
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}