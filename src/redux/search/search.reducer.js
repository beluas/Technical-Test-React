// Maybe we will eventually have more than one input searching into different resources (items, stores, resellers...) throughout the application then in this way the app is more scalable for future implementations

import { SEARCH_ITEMS } from "./search.types";

const INITIAL_STATE = {
	itemsSearchTerm: "",
};

const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case SEARCH_ITEMS:
			return {
				...state,
				itemsSearchTerm: payload,
			};

		default:
			return state;
	}
};

export default searchReducer;
