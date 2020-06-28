import { combineReducers } from "redux";
import itemsReducer from "./items/items.reducer";
import storesReducer from "./stores/stores.reducer";

const rootReducer = combineReducers({
	items: itemsReducer,
	stores: storesReducer,
});

export default rootReducer;
