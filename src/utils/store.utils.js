import isEqual from "lodash.isequal";

export const findArrElemById = (arr, id) => arr.find((el) => el.id === id);
export const sortArrOfObjByProp = (arr, prop, asc = "asc") => {
	let newArr = [...arr];
	let equalDistance = false;
	asc === "asc"
		? newArr.sort((a, b) => a[prop] - b[prop])
		: newArr.sort((a, b) => b[prop] - a[prop]);

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i + 1]) {
			if (newArr[i].distance === newArr[i + 1].distance) {
				equalDistance = true;
			}
		}
	}

	if (equalDistance) newArr.equalDistance = true;

	if (isEqual(arr, newArr)) newArr.sortedByDefault = true;

	return newArr;
};

export const createStoresToShow = (stores, itemToCompareID) => {
	let storesToShow = [];

	stores.forEach((store) => {
		let existingItem = findArrElemById(store.items, itemToCompareID);

		if (existingItem) {
			store.items.forEach((item) => {
				if (item.id === existingItem.id && item.qty < item.minQty) {
					let newStore = {
						...store,
						remainingQty: item.qty,
						itemToReplace: {
							id: itemToCompareID,

							quantityToAdd: item.minQty - item.qty,
						},
					};
					storesToShow.push(newStore);
				}
			});
		}
	});

	return storesToShow;
};

export const sortStoresToShow = (stores) => {
	let sortedStores = sortArrOfObjByProp(stores, "distance", "asc");
	if (sortedStores.equalDistance && sortedStores.sortedByDefault) {
		return sortArrOfObjByProp(stores, "remainingQty", "asc");
	}

	if (!sortedStores.equalDistance && sortedStores.sortedByDefault) {
		return sortArrOfObjByProp(stores, "distance", "asc");
	}

	if (sortedStores.equalDistance && !sortedStores.sortedByDefault) {
		return sortArrOfObjByProp(stores, "remainingQty", "asc");
	}

	if (!sortedStores.equalDistance && !sortedStores.sortedByDefault) {
		return sortArrOfObjByProp(stores, "distance", "asc");
	}
};
