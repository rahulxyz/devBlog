import types from './types';
import * as operations from './operations';
import { showLoader } from '../../../components/loader/partials/actions';

const actions = {
    getBlogList,
    addBlog
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

function addBlog(body) {
    return async dispatch =>{
        dispatch(showLoader(true))
        dispatch(request());
        try{
            const response = await operations.addBlog(body);
            const data = await response.data;
            
            dispatch(success(data));
        }catch(error){
            dispatch(failure(error));
        }finally{
            dispatch(showLoader(false))
        }
    }

    function request() {
        return {type: types.ADD_BLOG_REQUEST};
    }

    function success(payload) {
        return {type: types.ADD_BLOG_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.ADD_BLOG_FAILURE, error};
    }
}

export default actions;
