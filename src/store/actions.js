import types from './types';

const actions = {
    login
}

function login(credentials){
   
    return dispatch =>{

        dispatch(request());
        try{
            /* api call */
            const token = "token";
            dispatch(success(token));

        }catch(error){
            dispatch(failure(error));
        }
    }

    function request() {
        return {type: types.LOGIN_REQUEST};
    }

    function success(payload) {
        return {type: types.LOGIN_SUCCESS, payload};
    }

    function failure(error) {
        return {type: types.LOGIN_FAILURE, error};
    }
}

export default actions;