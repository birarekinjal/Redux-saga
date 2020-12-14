/* eslint-disable quotes */
/*-------------------------------------------------------------------------------
       This is the root reducer where all reducer combine in single reducer
------------------------------------------------------------------------------------*/
import { combineReducers } from "redux";
import Auth from "./Auth";


const appReducer = combineReducers({
  Auth,
});

export default appReducer;
