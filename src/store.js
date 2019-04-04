'use strict';

import { createStore } from 'redux'
import rootReducer from './reducers'

const acornStorage = createStore(rootReducer, composeWithDevTools());

export { acornStorage };