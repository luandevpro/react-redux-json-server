import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
   onDelete = (id) => {
      if (confirm('Ban co muon xoa san pham nay khong')){// eslint-disable-line
         this.props.onDelete(id)
      }
   }
   render() {
      var { product , index } = this.props
      var statusName = product.status ? "Còn Hàng" : "Hết Hàng"
      var statusClass = product.status ? "warning" : "default"
      return (
         <tr>
            <td>{index + 1 }</td>
            <td>{index + 1  }</td>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
            <td>
               <span className={`label label-${statusClass}`}>
                  { statusName }
               </span>
            </td>
            <td>
               <Link 
                  className="btn btn-success"
                  to={`/products/${product.id}/edit`}
               >Sua</Link>&nbsp;
               <button 
                  className="btn btn-danger"
                  onClick={() => this.onDelete(product.id)} 
               >Xoa</button>
            </td>
         </tr>
      );
   }
}

export default ProductItem