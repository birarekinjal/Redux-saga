/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import {
  AUTH_SIGNUP,
} from "../constants/ActionTypes";

export const loginRequest = (payload) => ({
  type: AUTH_SIGNUP,
  payload,
});
