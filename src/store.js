'use strict';

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

const acornStorage = createStore(rootReducer, composeWithDevTools());

export default acornStorage;