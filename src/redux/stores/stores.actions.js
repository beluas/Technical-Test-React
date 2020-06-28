import {
	ITEM_SELECTED,
	FETCH_STORES_FAILED,
	FETCH_STORES_SUCCESS,
	FETCH_STORES_PENDING,
	SHOW_CONFIRMATION_MODAL,
} from "./stores.types";

export const selectItem = (payload) => ({
	type: ITEM_SELECTED,
	payload,
});

export const fetchStoresPending = () => ({
	type: FETCH_STORES_PENDING,
});

export const fetchStoresSuccess = (payload) => ({
	type: FETCH_STORES_SUCCESS,
	payload,
});

export const fetchStoresFailed = (payload) => ({
	type: FETCH_STORES_FAILED,
	payload,
});

export const showModalToggle = () => ({
	type: SHOW_CONFIRMATION_MODAL,
});
