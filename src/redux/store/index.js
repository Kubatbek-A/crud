import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from '../reducers/index';

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;