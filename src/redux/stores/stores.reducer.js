import {
	ITEM_SELECTED,
	FETCH_STORES_FAILED,
	FETCH_STORES_SUCCESS,
	FETCH_STORES_PENDING,
	SHOW_CONFIRMATION_MODAL,
} from "./stores.types";

const INITIAL_STATE = {
	stores: [],
	itemSelected: "",
	isLoading: false,
	showModal: false,
};

const storesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ITEM_SELECTED:
			return {
				...state,
				itemSelected: payload,
			};
		case FETCH_STORES_PENDING:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_STORES_SUCCESS:
			return {
				...state,
				stores: payload,
				isLoading: false,
			};
		case FETCH_STORES_FAILED:
			return {
				...state,
				error: "Fetch Failed",
			};

		case SHOW_CONFIRMATION_MODAL:
			return {
				...state,
				showModal: !state.showModal,
			};

		default:
			return state;
	}
};

export default storesReducer;
