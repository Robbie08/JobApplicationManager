import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    email: 'someEmail@gmail.com',
    password: 'blahblah1'
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
        default:
            return state;
    }
}