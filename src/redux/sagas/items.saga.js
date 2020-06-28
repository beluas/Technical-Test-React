import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { sortItemsArrForName } from "../../utils/items.utils";

import {
	FETCH_ALL_ITEMS_PENDING,
	FETCH_ALL_ITEMS_SUCCESS,
	FETCH_ALL_ITEMS_FAILED,
} from "../items/items.types";

const fetchAllItems = async () => {
	try {
		const config = {
			"Content-Type": "application/json",
		};

		const res = await axios.get("./db/items.json", config);

		return res;
	} catch (error) {
		console.error(error);
	}
};

function* fetchAllItemsSaga() {
	try {
		const res = yield call(fetchAllItems);
		const items = sortItemsArrForName(res.data);

		yield put({ type: FETCH_ALL_ITEMS_SUCCESS, payload: items });
	} catch (error) {
		yield put({ type: FETCH_ALL_ITEMS_FAILED });
	}
}

export function* watchFetchAllProductsSaga() {
	yield takeEvery(FETCH_ALL_ITEMS_PENDING, fetchAllItemsSaga);
}
