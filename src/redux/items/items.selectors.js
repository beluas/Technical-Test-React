import { createSelector } from "reselect";

export const selectItemsState = (state) => state.items;

export const selectItems = createSelector(
	[selectItemsState],
	(items) => items.items
);

export const selectIsLoading = createSelector(
	[selectItemsState],
	(items) => items.isLoading
);

export const selectSearchedItems = createSelector(
	[selectItemsState],
	(items) => items.searchedItems
);

export const selectItemById = createSelector(
	[selectItems],
	(items) => (itemID) => items.find((item) => item.id === itemID).name
);
