import {
	FETCH_ALL_ITEMS_SUCCESS,
	FETCH_ALL_ITEMS_PENDING,
	FETCH_ALL_ITEMS_FAILED,
	SEARCH_ITEMS_FOR_NAME_AND_DESC,
} from "./items.types";
import { filterItemsForNameAndDesc } from "../../utils/search.utils";

const INITIAL_STATE = { items: [], isLoading: true, searchedItems: [] };

const itemsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case FETCH_ALL_ITEMS_SUCCESS:
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		case FETCH_ALL_ITEMS_PENDING:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_ALL_ITEMS_FAILED:
			return {
				...state,
				error: "Failed to Fetch",
			};

		case SEARCH_ITEMS_FOR_NAME_AND_DESC:
			return {
				...state,
				searchedItems: filterItemsForNameAndDesc(state.items, payload),
			};

		default:
			return state;
	}
};

export default itemsReducer;
