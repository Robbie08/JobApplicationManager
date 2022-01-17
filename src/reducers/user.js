import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    email: 'someEmail@gmail.com',
    loginStatus: false,
    firebaseData: {}
}

export function getUserData(state, action){
    return {
        ...state
    }
}

export function setUserData(state, action) {
    return {
        ...state,
        ...action.userData
    }
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.SET_USER_DATA:
            return setUserData(state, action);
        case ActionTypes.GET_USER_DATA:
            return getUserData(state, action);
        default:
            return state;
    }
}