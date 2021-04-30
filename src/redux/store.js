import { combineReducers, createStore } from 'redux';

import globalReducer from '../redux/reducers/global';

const reducer = combineReducers({
  global: globalReducer,
});

const store = createStore(reducer);
//const store = createStore(reducer, applyMiddleware(thunk));

export default store;
