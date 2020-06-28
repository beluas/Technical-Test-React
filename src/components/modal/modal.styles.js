import styled from "styled-components";

export const ModalContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-content: center;

	h2 {
		color: dodgerblue;
	}

	& .content {
		display: flex;
		flex-direction: column;
		width: 40%;
		padding: 1rem;
		height: fit-content;
		align-items: center;
		background: white;
		border: 1px solid black;
		position: relative;
		top: 15%;

		.details {
			width: fit-content;
			text-align: left;
			margin: 0 auto;

			h3 {
				margin: 0.3rem auto;
			}

			span {
				color: gray;
			}
		}

		.close {
			margin: 2rem auto 3rem;
			border: 1px solid #7ed321;
			color: gray;
			padding: 0.5rem 2.5rem;
			border-radius: 0.3rem;
			background-color: transparent;
		}
	}
`;
