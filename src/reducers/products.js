import * as Types from "./../constants/ActionTypes"

var initialState = []

var findIndex = (state,id) => {
   var result = -1
   state.forEach((products,index) => {
      if(products.id === id){
         result = index
      }
   })
   return result
}
const appReducers = (state = initialState , action ) => {
   var index = -1
   switch(action.type) {
      case Types.LIST_PRODUCT:
         return [...state]
      case Types.FETCH_PRODUCT:
         state = action.products
         return [...state]   
      case Types.DELETE_PRODUCT:
         index = findIndex(state,action.id)
         if(index !== -1){
            state.splice(index,1)
         }   
         return [...state]  
      case Types.ADD_PRODUCT:
         state.push(action.products)
         return [...state]  
      case Types.UPDATE_PRODUCT:
         index = findIndex(state,action.products.id)
         if(index !== -1){
            state[index] = action.products
         }
         return [...state]
      default:
         return[...state]   
   }
}

export default appReducers