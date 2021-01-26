import types from './types';
import * as operations from './operations';
import { showLoader } from '../../../components/loader/partials/actions';

const actions = {
    getArticleById,
    updateBlog
}


function getArticleById(id) {
    return async dispatch =>{

        dispatch(request());
        try{
            const response = await operations.getArticleById(id);
            const data = await response.data.article;
            
            dispatch(success(data));

        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.ARTICLE_REQUEST};
    }

    function success(payload) {
        return {type: types.ARTICLE_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.ARTICLE_FAILURE, error};
    }
}

function updateBlog(body) {
    return async dispatch =>{
        dispatch(showLoader(true))
        dispatch(request());
        try{
            const response = await operations.updateBlog(body);
            const data = await response.data;
            
            dispatch(success(data));
        }catch(error){
            dispatch(failure(error));
        }finally{
            dispatch(showLoader(false))
        }
    }

    function request() {
        return {type: types.UPDATE_ARTICLE_REQUEST};
    }

    function success(payload) {
        return {type: types.UPDATE_ARTICLE_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.UPDATE_ARTICLE_FAILURE, error};
    }
}

export default actions;
