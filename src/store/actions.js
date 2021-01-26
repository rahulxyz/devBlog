import types from './types';
import * as operations from './operations';
import { showLoader } from '../components/loader/partials/actions';

const actions = {
    login,
    register
}

function login(credentials){
   
    return async dispatch =>{
        dispatch(showLoader(true));
        dispatch(request());
        try{
            const response = await operations.login(credentials);
            const data = await response.data;
            sessionStorage.setItem("token",data.token);
            const userData = {
                username: data.name,
                email: data.email
            }
            dispatch(success(userData));
        }catch(error){
            dispatch(failure(error));
        } finally{
            dispatch(showLoader(false));
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
        dispatch(showLoader(true));
        dispatch(request());
        try{
            const response = await operations.register(credentials);
            dispatch(success());
            return Promise.resolve();
        }catch(error){
            dispatch(failure(error));
            return Promise.reject();
        }finally{
            dispatch(showLoader(false));
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