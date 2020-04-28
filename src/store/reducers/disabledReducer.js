import { ENABLE_FOLD_3, ENABLE_FOLD_5, ENABLE_FOLD_6  } from '../constants/action-types'


const initialState = {
    Fold_3_SqBtn: true,
    Fold_5_SqBtn: true,
    Fold_6_SqBtn: true,
}

const disabledReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_FOLD_3:
          return {
              ...initialState, 
              Fold_3_SqBtn: false,
            };
        case ENABLE_FOLD_5:
            return {
              ...initialState, 
              Fold_5_SqBtn: false,
            };
        case ENABLE_FOLD_6:
            return {
              ...initialState, 
              Fold_6_SqBtn: false,
            };
        default:
          return state;
      }
}

export default disabledReducer