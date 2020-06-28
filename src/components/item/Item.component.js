import React from "react";
import { ItemContainer } from "./item.styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectItem } from "../../redux/stores/stores.actions";

const Item = ({ name, description, id, selectItem }) => {
	return (
		<>
			<ItemContainer>
				<div className="text">
					<h4>{name}</h4>
					<p>{description /*.substring(0, 120) + "..."*/}</p>
				</div>

				<Link onClick={() => selectItem(id)} to="/stores">
					Ristoccaggio
				</Link>
			</ItemContainer>
		</>
	);
};

const dispatchToProps = (dispatch) => ({
	selectItem: (itemID) => dispatch(selectItem(itemID)),
});

export default connect(null, dispatchToProps)(Item);
