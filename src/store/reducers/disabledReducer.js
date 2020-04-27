import { ENABLE_FOLD_3_SELFIE } from '../constants/action-types'

const initialState = {
    Fold_3_Selfie_SqBtn: true,
    // Fold_3: 'none',
    // Fold_4: 'none',
    // Fold_5: 'none',
    // Fold_6: 'none',
    // Fold_7: 'none'
}

const disabledReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_FOLD_3_SELFIE:
          return {
              ...initialState, 
              Fold_3_Selfie_SqBtn: false,
            };
        default:
          return state;
      }
}

export default disabledReducer