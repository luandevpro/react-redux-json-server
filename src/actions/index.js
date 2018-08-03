import * as Types from './../constants/ActionTypes'
import API from './../utils/api'

export const requestProducts = () => {
   return dispatch => {
      return API(`products`,'get',null)
               .then(res => dispatch(fetchProduct(res.data)))
   }
}

export const fetchProduct = (products) => {
   return {
      type: Types.FETCH_PRODUCT,
      products
   }
}

export const deleteRequestProducts = (id) => {
   return dispatch => {
      return API(`products/${id}`,'delete',null)
               .then(res => dispatch(deleteProduct(id)))
   }
}
export const deleteProduct = (id) => {
   return {
      type: Types.DELETE_PRODUCT,
      id
   }
}
export const addRequestProducts = (products) => {
   return dispatch => {
      return API('products','post', products)
               .then(res => dispatch(addProduct(res.data)))
   }
}
export const addProduct = (products) => {
   return {
      type: Types.ADD_PRODUCT,
      products
   }
}

export const editRequestProducts = (id) => {
   return dispatch => {
      return API(`products/${id}`,'get',null)
               .then(res => dispatch(editProduct(res.data)))
   }
}

export const editProduct = (products) => {
   return {
      type: Types.EDIT_PRODUCT,
      products
   }
}

export const updateRequestProducts = (products) => {
   return dispatch => {
      return API(`products/${products.id}`,'put', products)
               .then(res => dispatch(updateProduct(res.data)))
   }
}

export const updateProduct = (products) => {
   return {
      type: Types.UPDATE_PRODUCT,
      products
   }
}