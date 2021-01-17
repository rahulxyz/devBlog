import types from './types';

const initialState = {
    blogList: []
}

export function home(state= initialState, action){
    switch(action.type){
        case types.BLOG_LIST_SUCCESS:
            return {
                ...state,
                blogList: action.payload
            }
        default:
            return state;
    }
}