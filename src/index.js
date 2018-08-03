import React from 'react'
import ReactDOM from 'react-dom'
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import appReducers from './reducers/index'
import App from './App'
import './index.css'

var store = createStore(
   appReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk)
)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, 
   document.getElementById('root')
)
