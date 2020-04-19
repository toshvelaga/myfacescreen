import { SELECT_STATE } from '../constants/action-types'

const initialState = {
    state: ''
}

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_STATE:
          return {
              ...initialState, 
            state: action.state
            };
        default:
          return state;
      }
}

export default selectedReducer;