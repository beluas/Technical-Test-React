import { SEARCH_ITEMS } from "./search.types";

export const searchItemsCockpit = (payload) => ({
	type: SEARCH_ITEMS,
	payload,
});
