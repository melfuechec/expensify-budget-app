import { createStore } from 'redux';
 
// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})
const resetCount = ({ count } = {}) => ({
    type: 'RESET',
    count
})

// Reducers - 1. are pure functions, output only determined by input. 2. Never change state or action. 
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":  
            return {
            count: state.count + action.incrementBy
        };
        case "DECREMENT": 
            return {
            count: state.count - action.decrementBy
        };
        case "RESET": return {
            count: 0
        };
        case "SET": return {
            count:101
        }
        default: 
            return state
        }
    }

const store = createStore(countReducer);

    const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    });

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(incrementCount());

store.dispatch(resetCount({count:1}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({count:101}));
