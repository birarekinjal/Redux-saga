/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/*---------------------------------------------------------------------------------------------
    Auth related api request handled here.
    Basically we create a task and on each takeEvery a task start and call api, dispatched a action
------------------------------------------------------------------------------------------------*/

import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes";
// eslint-disable-next-line import/extensions
import * as actions from "../actions/index";
import axios from "../services";

/*---------------------------------------------------------------------------------------------
                 Sign Up task start when sign up action is listen by saga
------------------------------------------------------------------------------------------------*/

function* signUp(action) {
  try {
    const { name, email, mobile, password, country_cd } = action.payload;
    const Email = email.toLowerCase();
    const response = yield axios
      .post("/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        name,
        mobile: {
          number: mobile,
          countryCode: country_cd,
          primary: true,
        },
        email: {
          email: Email,
          primary: true,
        },
        password,
      })
      .then(async (response) => response)
      .catch(async (error) => error);
    if (response.status == 200) {
      yield put(actions.apiLoaderSuccess());
      yield put(actions.successModal({ message: response.data.statusMessage }));
      yield put(actions.autherror({ authmessage: response.data.message }));
    } else if (response != 200) {
      yield put(
        actions.autherror({ authmessage: response.response.data.message })
      );
    } else {
      yield put(
        actions.autherror({ authmessage: response.response.data.message })
      );
    }
  } catch (error) {
    yield put(
      actions.autherror({ authmessage: response.response.data.message })
    );
  }
}


export default function* rootsaga() {
  yield takeEvery(actionTypes.AUTH_SIGNUP, signUp);
}
