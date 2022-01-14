import 'regenerator-runtime';
import { all } from 'redux-saga/effects';

import * as FirebaseSaga from './FirebaseSaga';
/**
 * Combine all defined sagas and export as default
 */
export default function* rootSaga() {
    yield all([
        FirebaseSaga.watchPostUserData()
    ]);
};