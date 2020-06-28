import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
	FETCH_STORES_PENDING,
	FETCH_STORES_SUCCESS,
	FETCH_STORES_FAILED,
} from "../stores/stores.types";

const fetchAllStores = async () => {
	try {
		const config = {
			"Content-Type": "application/json",
		};

		const res = await axios.get("./db/stores.json", config);

		return res;
	} catch (error) {
		console.error(error);
	}
};

function* fetchAllStoresSaga() {
	try {
		const res = yield call(fetchAllStores);
		const stores = res.data;

		yield put({ type: FETCH_STORES_SUCCESS, payload: stores });
	} catch (error) {
		yield put({ type: FETCH_STORES_FAILED });
	}
}

export function* watchFetchAllStoresSaga() {
	yield takeEvery(FETCH_STORES_PENDING, fetchAllStoresSaga);
}
