export const filterItemsForNameAndDesc = (state, searchTerm) => {
	const term = searchTerm.toLowerCase();

	return state.filter(
		(item) =>
			item.description.toLowerCase().includes(term) ||
			item.name.toLowerCase().includes(term)
	);
};
