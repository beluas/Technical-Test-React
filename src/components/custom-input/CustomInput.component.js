import React, { useState } from "react";
import { CustomInputContainer } from "./customInput.styles";
import { connect } from "react-redux";
import { searchItemsForNameAndDesc } from "../../redux/items/items.actions";

const CustomInput = ({ searchItemsForNameAndDesc }) => {
	const [inputValue, setInputValue] = useState({
		searchTerm: "",
	});
	const { searchTerm } = inputValue;

	const handleSubmit = (e) => {
		e.preventDefault();
		searchItemsForNameAndDesc(searchTerm);
	};

	const handleChange = (e) => {
		// Maybe in the future we want more than one value for this state for some reason.
		setInputValue({ ...inputValue, [e.target.name]: e.target.value });
	};

	return (
		<CustomInputContainer onSubmit={(e) => handleSubmit(e)}>
			<i className="fas fa-search"></i>
			<input
				onChange={(e) => handleChange(e)}
				type="text"
				name="searchTerm"
				value={searchTerm}
				placeholder="Di cosa hai bisogno oggi?"
			/>
			<button type="submit">Cerca</button>
		</CustomInputContainer>
	);
};

const dispatchToProps = (dispatch) => ({
	searchItemsForNameAndDesc: (searchTerm) =>
		dispatch(searchItemsForNameAndDesc(searchTerm)),
});

export default connect(null, dispatchToProps)(CustomInput);
