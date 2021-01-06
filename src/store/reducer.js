import types from './types';

const initalState = {
    token: ''
}

export function auth(state=initalState, action){
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}