import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'

class ProductActionPage extends Component {
   constructor(props){
      super(props)
      this.state = {
         id: '',
         txtName: '',
         txtPrice: '',
         chkbStatus: ''
      }
   }
   componentDidMount(){
      var { match } = this.props
      if(match){
         var id = match.params.id
         this.props.editRequestProducts(id)
         
      }
   }
   componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.editProducts){
         var { editProducts } = nextProps
         this.setState({
            id: editProducts.id,
            txtName: editProducts.name,
            txtPrice: editProducts.price,
            chkbStatus: editProducts.status
         })
      }
   }
   onChange = (e) => {
      var target = e.target
      var name = target.name
      var value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({
         [name]: value
      })
   }
   onSubmit = (e) => {
      e.preventDefault()
      var { id , txtName , txtPrice , chkbStatus } = this.state
      var { history } = this.props
      var products = {
         id: id,
         name: txtName,
         price: txtPrice,
         status: chkbStatus
      }
      if(id){
        this.props.updateRequestProducts(products)
      }else {
         this.props.addRequestProducts(products)
      }
      history.goBack()
   }
   render() {
      return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                  <label>Ten</label>
                  <input 
                     type="text" 
                     className="form-control"
                     name="txtName"
                     value={this.state.txtName}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Gia</label>
                  <input 
                     type="number" 
                     className="form-control"
                     name="txtPrice"
                     value={this.state.txtPrice}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Trang thai :</label>
               </div>
               <div className="checkbox">
                  <label>
                     <input 
                        type="checkbox"
                        name="chkbStatus"
                        value={this.state.chkbStatus}
                        onChange={this.onChange}
                        checked={this.state.chkbStatus}
                     />Con hang
                  </label>
               </div>
               <button type="submit" className="btn btn-primary">
                  Luu lai
               </button>
               <Link to='/products-list' className='btn btn-danger ml-10'>Tro lai</Link>
            </form>
         </div>
      )
   }
}

var mapStateToProps = state => {
   return {
      editProducts: state.editProducts
   }
}
var mapDispatchToProps = dispatch => {
   return {
      addRequestProducts: (products) => {
         dispatch(actions.addRequestProducts(products))
      },
      editRequestProducts: (id) => {
         dispatch(actions.editRequestProducts(id))
      },
      updateRequestProducts: (products) => {
         dispatch(actions.updateRequestProducts(products))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage)