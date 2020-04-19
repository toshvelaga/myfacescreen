import { SELECT_STATE } from '../constants/action-types'

const initialState = {
    selected_state: ''
}

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_STATE:
          return {
              ...initialState, 
            selected_state: action.selected_state
            };
        default:
          return state;
      }
}

export default selectedReducer;