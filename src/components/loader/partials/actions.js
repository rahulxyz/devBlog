import types from "./types"

export const showLoader = (show)=>{

    return async dispatch => {
        if(show)
            dispatch(showLoader());
        else
            dispatch(hideLoader());
    }

    function showLoader(){
        return {type: types.SHOW_LOADER};
    }

    function hideLoader(){
        return {type: types.HIDE_LOADER};
    }
}