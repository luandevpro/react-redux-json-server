
import * as Types from "./../constants/ActionTypes"

var initialState = {}

const appReducers = (state = initialState , action ) => {
   switch(action.type) {
      case Types.EDIT_PRODUCT:
         return action.products
      default:
         return state
   }
}

export default appReducers