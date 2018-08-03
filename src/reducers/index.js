import { combineReducers } from 'redux'
import products from './products'
import editProducts from './editProducts'

const reducers = combineReducers({
   products,
   editProducts
})

export default reducers