/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import {all} from 'redux-saga/effects';
import apiSaga from './apiSaga';

export default function* rootSaga() {
  yield all([apiSaga()]);
}
