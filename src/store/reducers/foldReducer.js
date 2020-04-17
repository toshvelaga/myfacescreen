import { SHOW_FOLD_2, SHOW_FOLD_3 } from '../constants/action-types'

const initialState = {
    Fold_2: 'none',
    Fold_3: 'none',
}

const foldReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FOLD_2:
          return {
              ...initialState, 
              Fold_2: 'contents'
            };
        case SHOW_FOLD_3:
          return {
              ...initialState,
              Fold_2: 'contents',
              Fold_3: 'contents'
            };
        default:
          return state;
      }
}

export default foldReducer