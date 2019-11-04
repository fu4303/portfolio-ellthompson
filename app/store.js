import { createStore, combineReducers } from 'redux';

const scroll = (state = { position: null, nearTopOfPage: true, nearBottomOfPage: false }, action) => {
    switch(action.type) {
        case 'UPDATE_SCROLL_POS':
            return {
                position: action.value,
                nearBottomOfPage: action.value > (window.innerHeight * 0.60),
                nearTopOfPage: action.value < (window.innerHeight * 0.40),
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    scroll
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
