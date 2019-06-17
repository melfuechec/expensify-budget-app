import { createStore, combineReducers } from 'redux';
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters"

//Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
            // so that redux devtools show up in browser
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
