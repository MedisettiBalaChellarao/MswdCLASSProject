import React from 'react'
import { Link } from 'react-router-dom';

/* const Order = (props) => {
  return (
    <div>
      <p>ORDERID:{props.oid} DATE:{props.odate}  CUSTOMER NAME:{props.ocustname} ADDRESS:{props.oaddress} DELIVERY DATE:{props.odeliverydate} MODE OF PAYMENT: {props.omodeofpayment}</p>
    </div>
  )
}

export default Order
*/

//we can use props for ease of code


 
// Sample product data 
const order = [ //array of objects 
  { oid: '1001', oname: 'Product 1', oprice: '$70' }, 
  { oid: 'P002', oname: 'Product 2', oprice: '$30' }, // key col value mode for all 
  { oid: 'P003', oname: 'Product 3', oprice: '$20' }, 
  { oid: 'P004', oname: 'Product 4', oprice: '$40' } 
]; 
 
const Order = () => { 
  return ( 
    <div> 
     <u> <b>ARRAY OF OBJECTS</b></u> 
      <h1>Order List</h1> 
      <table> 
        <thead> 

          <tr> 
            <th>Order ID</th> 
            <th>Order Name</th> 
            <th>Order Price</th> 
          </tr> 

        </thead> 

        <tbody> 
          {order.map(ordr => ( 
            <tr key={ordr.oid}> 
              <td>{ordr.oid}</td> 
              <td>{ordr.oname}</td> 
              <td>{ordr.oprice}</td> 
            </tr> 
          ))} 

          
        </tbody> 

      </table> 

      <h2> You want to track your order <Link to="/Track">Track</Link> </h2>
    </div> 
  ); 
}; 
 
export default Order;