import styled from "styled-components";

export const StoreContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0rem 1rem;
	align-items: center;
	border: 1px solid gray;
	margin-bottom: 1rem;

	& > * {
		flex-basis: 32%;
	}

	button {
		max-width: 160px;
		border: 1px solid black;
		padding: 0.8rem 1.3rem;

		background-color: #7ed321;
		border-radius: 0.3rem;
		color: white;
		text-transform: uppercase;
	}

	p {
		font-size: 12px;
		span {
			font-size: 16px;
			font-weight: bold;
		}
	}

	@media (max-width: 590px) {
		h4 {
			flex-basis: 15%;
		}
		p {
			flex-basis: 35%;
		}
		button {
			font-size: 12px;
			max-width: 130px;
			padding: 0.5rem 0.7rem;
		}
	}
`;
