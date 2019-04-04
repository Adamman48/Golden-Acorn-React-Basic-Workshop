'use strict';

import { createStore } from 'redux'
import rootReducer from './reducers'

const acornStorage = createStore(rootReducer/* , window.STATE_FROM_SERVER */);

export { acornStorage };