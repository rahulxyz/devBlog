import types from './types';
import * as operations from './operations';

const actions = {
    getBlogList
}


function getBlogList() {
    return async dispatch =>{

        dispatch(request());
        try{
            const response = await operations.getBlogList();
            const data = await response.data;
            
            dispatch(success(data));

        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.BLOG_LIST_REQUEST};
    }

    function success(payload) {
        return {type: types.BLOG_LIST_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.BLOG_LIST_FAILURE, error};
    }
}

export default actions;
