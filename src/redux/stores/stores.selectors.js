import { createSelector } from "reselect";

const selectStoresState = (state) => state.stores;

export const selectStores = createSelector(
	[selectStoresState],
	(stores) => stores.stores
);

export const selectStoresItems = createSelector([selectStores], (stores) =>
	stores.map((store) => ({ [store.name]: store.items }))
);

export const selectItemsToCompare = createSelector(
	[selectStoresState],
	(stores) => stores.itemSelected
);

export const selectShowModal = createSelector(
	[selectStoresState],
	(stores) => stores.showModal
);

// store.items[i].qty &lt; store.items[i].minQty
