import React , { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from './../../actions/index'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'

class ProductListPage extends Component {
   componentDidMount(){
      this.props.fetchProduct()
   }
   findIndex = (products,id) => {
      var result = -1
      products.forEach((product,index) => {
         if(product.id === id){
            result = -1
         }
      })
      return result
   }
   onDelete = (id) => {
      this.props.deleteRequestProducts(id)
   }
   showProductItem = products => {
      var result = null
      if(products.length > 0){
         result = products.map((product,index) => {
            return <ProductItem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}  
                   />
         })
      }
      return result
   }
   render() {
      var {products} = this.props
      return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/products/add" className="btn btn-primary mb-10">Them san pham</Link>
            <ProductList>
               { this.showProductItem(products) }
            </ProductList>
         </div>
      )
   }
}

var mapStateToProps = state => {
   return {
      products: state.products
   }
}

var mapDispatchToProps = dispatch => {
   return {
      fetchProduct: () => {
         dispatch(actions.requestProducts())
      },
      deleteRequestProducts: (id) => {
         dispatch(actions.deleteRequestProducts(id))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage)