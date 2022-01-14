import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as ActionCreators from '../actions/Actions';
import * as ActionTypes from '../actions/ActionTypes';

// Worker saga: will be fired on USER_REGISTER_REQ actions
export function* postUserData(data){
    
    console.log(`email: ${data.userData.email} \npassword: ${data.userData.password}`);
    try{
        const user = yield createUserWithEmailAndPassword(auth, data.userData.email, data.userData.password);
        console.log(user);
        yield put(ActionCreators.setUserData(data.userData));

        // on success we should move to the home screen
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
