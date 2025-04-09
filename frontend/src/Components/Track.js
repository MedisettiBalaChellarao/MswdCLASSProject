import React from 'react'

const Track = (orders) => {
  return (

    <div>
      <p>Productid:{orders.oid} CUSTOMERNAME:{orders.oname} EXPECTED DELIVERY:{orders.odate} STATUS:{orders.ostate} DELIVERY:{} AUTHORITY:{} </p>
    </div>
  )
}

export default Track

