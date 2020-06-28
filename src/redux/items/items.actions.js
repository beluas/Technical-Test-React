import {
	FETCH_ALL_ITEMS_SUCCESS,
	FETCH_ALL_ITEMS_PENDING,
	FETCH_ALL_ITEMS_FAILED,
	SEARCH_ITEMS_FOR_NAME_AND_DESC,
} from "./items.types";

export const fetchAllItemsPending = () => ({
	type: FETCH_ALL_ITEMS_PENDING,
});

export const fetchAllItemsSuccess = (payload) => ({
	type: FETCH_ALL_ITEMS_SUCCESS,
	payload,
});

export const fetchAllItemsFailed = () => ({
	type: FETCH_ALL_ITEMS_FAILED,
});

export const searchItemsForNameAndDesc = (payload) => ({
	type: SEARCH_ITEMS_FOR_NAME_AND_DESC,
	payload,
});
