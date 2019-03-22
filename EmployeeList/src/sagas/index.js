import { put, takeLatest } from "redux-saga/effects";
import { setEmployeeDetails } from "../actions/index";
import axios from "axios";

function* getApiData(action) {
  try {
    const response = yield axios.get(
      "https://reqres.in/api/users/" + action.payload
    );
    yield put(setEmployeeDetails(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest("GET_EMPLOYEE_DETAILS", getApiData);
}
