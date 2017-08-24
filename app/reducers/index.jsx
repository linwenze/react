import { combineReducers } from 'redux';
import myApp from './todos';
// import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    myApp,
});

export default reducer;
