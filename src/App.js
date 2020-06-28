import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllItemsPending } from "./redux/items/items.actions";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Stores from "./pages/storesPage/Stores.component";
import Header from "./components/header/Header.component";
import { fetchStoresPending } from "./redux/stores/stores.actions";

const App = ({ fetchAllItemsPending, fetchStoresPending }) => {
	useEffect(() => {
		fetchAllItemsPending();
		fetchStoresPending();
	}, []);

	return (
		<section className="app">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/stores" component={Stores} />
			</Switch>
		</section>
	);
};

const dispatchToProps = (dispatch) => ({
	fetchAllItemsPending: () => dispatch(fetchAllItemsPending()),
	fetchStoresPending: () => dispatch(fetchStoresPending()),
});

export default connect(null, dispatchToProps)(App);
