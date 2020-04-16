import { combineReducers } from 'redux';

import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import navbarReducer from './navbarReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    navbarReducer,
});

export default rootReducer;