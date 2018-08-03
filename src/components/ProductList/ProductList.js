import React, { Component } from 'react'

class ProductLists extends Component {
   render() {
      var { children } = this.props
      return (
         <div className="panel panel-primary">
            <div className="panel-heading">
               <h3 className="panel-title">Danh sach san pham</h3>
            </div>
            <div className="panel-body">
               <table className="table table-bordered table-hover">
                  <thead>
                     <tr>
                        <th>STT</th>
                        <th>MA</th>
                        <th>TEN</th>
                        <th>GIA</th>
                        <th>TRANG THAI</th>
                        <th>HANH DONG</th>
                     </tr>
                  </thead>
                  <tbody>
                     { children }
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default ProductLists