import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

/* All the values in the 'logger' array will be spread into '...middlewares' as individual arguments */
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
)

// The PERSISTOR is a PERSISTED version of the store
export const persistor = persistStore(store)

export default { store, persistor };

/*
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

// import { fetchCollectionsStart } from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware()

//All the values in the 'logger' array will be
//spread into '...middlewares' as individual arguments
const middlewares = [sagaMiddleware]

// Add logger to the middleware's array if using development mode
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer, 
  applyMiddleware( ...middlewares)
)

sagaMiddleware.run(rootSaga)

//The PERSISTOR is a PERSISTED version of the store:
//instead of using localStorage, persistor allows the user authentication
//to be remembered even after the website's tab/window is shut
export const persistor = persistStore(store)

export default { store, persistor };
*/