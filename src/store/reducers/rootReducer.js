import { combineReducers } from 'redux';

import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import navbarReducer from './navbarReducer'
import foldReducer from './foldReducer'
import toggleboxReducer from './toggleboxReducer'
import selectedReducer from './selectedReducer'
import progressbarReducer from './progressbarReducer'
import disabledReducer from './disabledReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    navbarReducer,
    foldReducer,
    toggleboxReducer,
    selectedReducer,
    progressbarReducer,
    disabledReducer
});

export default rootReducer;