/* eslint-disable eqeqeq */
/* eslint-disable no-duplicate-case */
/* eslint-disable max-len */
/*----------------------------------------------------------------------------------------------------------------
       This is the Auth reducer where all auth related state managed like signin,signup,forgotpassword,etc
-------------------------------------------------------------------------------------------------------------------*/

import * as actionTypes from '../constants/ActionTypes';

export const INITIAL_STATE = {
  signup_success: false,
};
/*---------------------------------------------------------------------
               User signup success feedback  message
 ----------------------------------------------------------------------*/

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signup_success: true,
      };
    default:
      return state;
  }
};
