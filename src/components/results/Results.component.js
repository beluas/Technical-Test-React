import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectItems,
	selectIsLoading,
	selectSearchedItems,
} from "../../redux/items/items.selectors";
import { ResultContainer } from "./results.styles";
import Item from "../item/Item.component";

const Results = ({ items, isLoading, searchedItems }) => {
	const itemsToShow = searchedItems.length ? searchedItems : items;

	return (
		<ResultContainer>
			<h3>Risultati</h3>
			{!isLoading
				? itemsToShow.map((item) => <Item key={item.id} {...item} />)
				: "Loading in progress..."}
		</ResultContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectItems,
	isLoading: selectIsLoading,
	searchedItems: selectSearchedItems,
});

export default connect(stateToProps, null)(Results);
