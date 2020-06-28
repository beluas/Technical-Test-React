import styled, { css } from "styled-components";

export const getBoxShadowMixin = css`
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const CustomInputContainer = styled.form`
	display: flex;
	border: 1px solid lightgray;
	padding: 0.8rem 1rem;
	justify-content: space-between;
	${getBoxShadowMixin}

	border-radius:.3rem;
	margin-bottom: 3rem;
	input {
		flex-basis: 80%;
		border: none;

		&::placeholder {
			font-family: Montserrat;
		}
	}

	i {
		position: relative;
		top: 8px;
		flex-basis: 0%;
	}

	button {
		max-width: 100px;
		border: 1px solid gray;
		padding: 0.5rem 1.3rem;
		font-family: "Montserrat";
		text-transform: uppercase;
		text-decoration: none;
		background-color: #f5a623;
		border-radius: 0.3rem;
		color: white;
	}

	@media (max-width: 800px) {
		i {
			flex-basis: 5%;
		}
	}
`;
