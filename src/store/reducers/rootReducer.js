import { combineReducers } from 'redux';

import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import navbarReducer from './navbarReducer'
import foldReducer from './foldReducer'
import toggleboxReducer from './toggleboxReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    navbarReducer,
    foldReducer,
    toggleboxReducer,
});

export default rootReducer;