'use strict';

import { createStore } from 'redux'
import rootReducer from './reducers'

const acornStorage = createStore(rootReducer);



export { acornStorage };