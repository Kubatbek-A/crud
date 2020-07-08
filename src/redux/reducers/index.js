import { combineReducers } from 'redux';

import AppReducer from './app-reducer';
import EditReducer from './edit-reducer';
import SearchReducer from './search-reducer';

const mainReducer = combineReducers({ AppReducer, EditReducer, SearchReducer });

export default mainReducer;