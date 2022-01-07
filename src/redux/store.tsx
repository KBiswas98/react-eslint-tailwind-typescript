import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Navigation from '../screens/Navigation'
import thunk from 'redux-thunk'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promise, thunk)))

export default function Store() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	)
}
