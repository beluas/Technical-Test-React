export const sortItemsArrForName = (itemsArr) => {
	return itemsArr.sort((a, b) => {
		let nameA = a.name.toLowerCase();
		let nameB = b.name.toLowerCase();
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		} else {
			return 1;
		}
	});
};
