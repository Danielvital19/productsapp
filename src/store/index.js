import {createStore, combineReducers} from 'redux'
import searchReducer from './search/reducer'


const reducers = combineReducers({
    searchReducer
});

const store = createStore (
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;