import { createSelector } from "reselect";

const selectSearch = (state) => state.select.search;
export const selectSearchItems = createSelector(
	[selectSearch],
	(search) => search.searchTermItems
);
