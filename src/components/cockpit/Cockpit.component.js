import React from "react";
import { CockpitContainer } from "./cockpit.styles";
import CustomInput from "../custom-input/CustomInput.component";
// This component has been added because in the future we want to add something more than the input
const Cockpit = () => {
	return (
		<CockpitContainer>
			<CustomInput />
		</CockpitContainer>
	);
};

export default Cockpit;
