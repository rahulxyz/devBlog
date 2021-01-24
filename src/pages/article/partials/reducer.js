import types from './types';

const initialState = {
}

export function article(state= initialState, action){
    switch(action.type){
        case types.ARTICLE_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}