import types from './types';
import * as operations from './operations';

const actions = {
    getArticleById
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

export default actions;
