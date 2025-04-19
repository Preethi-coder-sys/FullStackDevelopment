import React from 'react'

export default function Product({productinfo}) {
  return (
    <div>
        <p>PRODUCT DETAILS: Product: {productinfo.productname}, Product cost: {productinfo.cost}</p>
    </div>
  )
}
