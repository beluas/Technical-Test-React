import React from "react";
import { connect } from "react-redux";
import {
	selectStores,
	selectItemsToCompare,
} from "../../redux/stores/stores.selectors";
import { createStructuredSelector } from "reselect";
import {
	createStoresToShow,
	sortStoresToShow,
} from "../../utils/store.utils.js";
import Store from "../../components/store/Store.component";
import { Redirect, Link } from "react-router-dom";
import { EmptyMessageContainer, ContainerStoresPage } from "./stores.styles";

const Stores = ({ fetchStoreRequest, stores, itemToCompareID, history }) => {
	let storesToShow = createStoresToShow(stores, itemToCompareID);

	let sortedStores = sortStoresToShow(storesToShow);
	storesToShow = sortedStores.length ? (
		sortedStores.map((store) => <Store key={store.id} {...store} />)
	) : (
		<EmptyMessageContainer>
			<h3>
				Ci dispiace per l'inconveniente. Nessun magazzino disponibile
				per l'azione da Lei richiesta
			</h3>{" "}
		</EmptyMessageContainer>
	);

	return (
		<ContainerStoresPage>
			{itemToCompareID ? storesToShow : <Redirect to="/" />}
			<Link to="/">
				{" "}
				<i className="fas fa-long-arrow-alt-left"></i> Torna ai prodotti{" "}
			</Link>
		</ContainerStoresPage>
	);
};

const stateToProps = createStructuredSelector({
	stores: selectStores,
	itemToCompareID: selectItemsToCompare,
});

export default connect(stateToProps, null)(Stores);
