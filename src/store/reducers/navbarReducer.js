import { OPEN_NAVBAR, CLOSE_NAVBAR } from '../constants/action-types'

const initialState = {
    width: '0'
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_NAVBAR:
          return {
              ...initialState, 
              width: '335px'
            };
        case CLOSE_NAVBAR:
          return {
              ...initialState, 
              width: '0'
            };
        default:
          return state;
      }
}

export default navbarReducer