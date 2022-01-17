import {  put, takeLatest } from 'redux-saga/effects'
import * as ActionCreators from '../actions/Actions';
import * as ActionTypes from '../actions/ActionTypes';


// Worker saga: will be fired on USER_REGISTER_REQ actions
export function* postUserData(data){
    try{
        console.log(`email: ${data.userData.email} \npassword: ${data.userData.password}`);
        yield put(ActionCreators.setUserData(data.userData));
    }catch(error){
        console.log(error);
    }
}



/*
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* watchPostUserData() {
    yield takeLatest(ActionTypes.POST_USER_DATA, postUserData);
}
