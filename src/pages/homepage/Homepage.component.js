import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Cockpit from "../../components/cockpit/Cockpit.component";
import Results from "../../components/results/Results.component";

const Homepage = () => {
	return (
		<HomepageContainer>
			<Cockpit />
			<Results />
		</HomepageContainer>
	);
};

export default Homepage;
