import React from "react";
import { ModalContainer } from "./modal.styles";

const Modal = ({ item, name, itemToReplace, onClick }) => {
	const handleClick = (status) => {
		onClick(status);
	};

	return (
		<ModalContainer>
			<div className="content">
				<div className="details">
					<h2>Azione Confermata</h2>
					<h3>
						{" "}
						<span>Prodotto</span> {item}
					</h3>
					<h3>
						<span>Magazzino</span> {name}
					</h3>
					<h3>
						<span>Articoli inviati:</span>{" "}
						{itemToReplace.quantityToAdd}{" "}
					</h3>
				</div>

				<button className="close" onClick={() => handleClick(false)}>
					Chiudi
				</button>
			</div>
		</ModalContainer>
	);
};

export default Modal;
