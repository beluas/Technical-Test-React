import { watchFetchAllProductsSaga } from "./items.saga";
import { all } from "redux-saga/effects";
import { watchFetchAllStoresSaga } from "./stores.saga";

export default function* rootSaga() {
	yield all([watchFetchAllProductsSaga(), watchFetchAllStoresSaga()]);
}
