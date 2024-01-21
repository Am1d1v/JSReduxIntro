const redux = require('redux');


// Reducer Function
const reducerCounter = (state, action) => {
    return {
        counter: state.counter + 1,
    };
};

// Store Creation
const store =  redux.createStore(reducerCounter);

// Subscribe for Counter
const counterSubscribe = () => {
    console.log(store.getState());
}

store.subscribe(counterSubscribe)

counterSubscribe();