import types from './types';
import * as operations from './operations';

const actions = {
    login,
    register
}

function login(credentials){
   
    return async dispatch =>{
        
        dispatch(request());
        try{
            const response = await operations.login(credentials);
            const data = await response.data;
            localStorage.setItem("token",data.token);
            const userData = {
                username: data.name,
                email: data.email
            }
            dispatch(success(userData));
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

function register(credentials){
   
    return async dispatch =>{

        dispatch(request());
        try{
            const response = await operations.register(credentials);
            dispatch(success());
            return Promise.resolve();
        }catch(error){
            dispatch(failure(error));
            return Promise.reject();
        }
    }

    function request() {
        return {type: types.REGISTER_REQUEST};
    }

    function success() {
        return {type: types.REGISTER_SUCCESS};
    }

    function failure(error) {
        return {type: types.REGISTER_FAILURE, error};
    }
}



export default actions;