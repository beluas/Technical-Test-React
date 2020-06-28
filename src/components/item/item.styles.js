import styled from "styled-components";

export const ItemContainer = styled.div`
	display: flex;
	padding: 0.8rem 1rem;
	border: 1px solid lightgray;
	margin-bottom: 1rem;
	justify-content: space-between;
	align-items: center;
	.text {
		display: flex;
		flex-direction: column;
		flex-basis: 70%;

		h4,
		p {
			margin: 0.3rem;
		}
	}

	a {
		border: 1px solid black;
		padding: 0.8rem 1.3rem;
		max-width: 170px;

		background-color: #7ed321;
		border-radius: 0.3rem;
		color: white;
		text-transform: uppercase;
	}

	@media (max-width: 800px) {
		a {
			padding: 0.6rem;
			max-width: 120px;
			font-size: 12px;
		}
	}

	@media (max-width: 590px) {
		flex-wrap: wrap;

		.text {
			flex-basis: 100%;
		}

		a {
			margin: 1rem auto;

			padding: 0.6rem;
			max-width: 120px;
			font-size: 12px;
		}
	}
`;
