import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./sagas/rootSaga";

const generateStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [logger, sagaMiddleware];

	const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

	sagaMiddleware.run(rootSaga);

	return store;
};

export default generateStore;
