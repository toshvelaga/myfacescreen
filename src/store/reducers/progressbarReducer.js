import { SEGMENT_2, SEGMENT_3, SEGMENT_4, SEGMENT_5, SEGMENT_6, SEGMENT_7 } from '../constants/action-types'

const initialState = {
    width: '0'
}

const progressbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEGMENT_2:
          return {
              ...initialState, 
              width: '14%'
            };
        case SEGMENT_3:
          return {
              ...initialState, 
              width: '30%'
            };
        case SEGMENT_4:
            return {
              ...initialState, 
              width: '45%'
            };
        case SEGMENT_5:
            return {
                ...initialState, 
                width: '59%'
            };
        case SEGMENT_6:
            return {
                ...initialState, 
                width: '73%'
            };
        case SEGMENT_7:
            return {
                ...initialState, 
                width: '100%'
            };
        default:
          return state;
      }
}

export default progressbarReducer