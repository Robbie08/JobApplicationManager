import * as ActionTypes from './ActionTypes';

export function setUserData(userData){
    return {
        type: ActionTypes.SET_USER_DATA,
        userData
    };
}

export function postUserData(userData){
    return{
        type: ActionTypes.POST_USER_DATA,
        userData
    };
}