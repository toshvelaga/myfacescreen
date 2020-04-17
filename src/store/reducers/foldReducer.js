import { SHOW_FOLD_2, SHOW_FOLD_3, SHOW_FOLD_4, SHOW_FOLD_5, SHOW_FOLD_6 } from '../constants/action-types'

const initialState = {
    Fold_2: 'none',
    Fold_3: 'none',
    Fold_4: 'none',
    Fold_5: 'none'
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
        case SHOW_FOLD_4:
          return {
              ...initialState,
              Fold_2: 'contents',
              Fold_3: 'contents',
              Fold_4: 'contents'
            };
        case SHOW_FOLD_5:
          return {
              ...initialState,
              Fold_2: 'contents',
              Fold_3: 'contents',
              Fold_4: 'contents',
              Fold_5: 'contents'
            };
        case SHOW_FOLD_6:
          return {
              ...initialState,
              Fold_2: 'contents',
              Fold_3: 'contents',
              Fold_4: 'contents',
              Fold_5: 'contents',
              Fold_6: 'contents'
            };
        default:
          return state;
      }
}

export default foldReducer