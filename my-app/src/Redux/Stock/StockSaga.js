import { call, put, takeEvery } from "redux-saga/effects";
import { Get_Data, Get_Data_s } from "../Stock/StockType";
import Service from "../Api/StockApi";

function* getStocks() {
  try {
    const result = yield call(Service.get,"/mockdata");
    console.log('909',result)
    yield put({
      type: Get_Data_s,
      payload: result,
    });
  } catch (e) {
    yield put({ type: Get_Data.ERROR, message: e });
  }
}

export default function* Selectall() {
  yield takeEvery(Get_Data, getStocks);
}
