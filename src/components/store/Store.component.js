import React, { useState } from "react";
import { StoreContainer } from "./store.styles";
import { connect } from "react-redux";
import { selectItemById } from "../../redux/items/items.selectors";
import Modal from "../modal/Modal.component";

const Store = ({ name, distance, itemToReplace, item }) => {
	const [modal, setModal] = useState({
		showModal: false,
	});

	const handleClickButton = (show) => {
		setModal({ ...modal, showModal: show });
	};

	const { showModal } = modal;
	return (
		<StoreContainer>
			<h4>{name}</h4>
			<p>
				Distanza: <span> {distance}km</span>
			</p>
			<button onClick={() => handleClickButton(true)}>Ordina Ora</button>

			{showModal ? (
				<Modal
					item={item}
					itemToReplace={itemToReplace}
					name={name}
					onClick={handleClickButton}
				/>
			) : null}
		</StoreContainer>
	);
};

const stateToProps = (state, ownProps) => ({
	item: selectItemById(state)(ownProps.itemToReplace.id),
});

export default connect(stateToProps, null)(Store);
