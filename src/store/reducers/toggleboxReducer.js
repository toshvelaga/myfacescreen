import { USE_FACE, UPLOAD_DESIGN } from '../constants/action-types'

const initialState = {
    use_face: true,
    upload_design: false,
}

const toggleboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case USE_FACE:
          return {
              ...initialState, 
              use_face: true,
              upload_design: false,
            };
        case UPLOAD_DESIGN:
          return {
              ...initialState, 
              use_face: false,
              upload_design: true,
            };
        default:
          return state;
      }
}

export default toggleboxReducer;