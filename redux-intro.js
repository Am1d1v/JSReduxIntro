const redux = require('redux');


// Reducer Function
const reducerCounter = (state = {counter: 0}, action) => {

    // Increase Counter by 1
    if(action.type === "increment"){
        return {
            counter: state.counter + 1,
        };
    } 
    
    // Decrease Counter by 1
    if (action.type === "decrement"){
        return {
            counter: state.counter - 1,
        };
    }

    return state;
    
};

// Store Creation
const store =  redux.createStore(reducerCounter);

// Subscribe for Counter
const counterSubscribe = () => {
    const newState = store.getState();
    console.log(newState);
}

store.subscribe(counterSubscribe)

// Action type "increment"
store.dispatch({type: "increment"})

// Action type "decrement"
store.dispatch({type: "decrement"})
