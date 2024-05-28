import React from 'react'

function ProductDetails( { params }:{
    params: { productId: string}
}) {
  return (
    <div>Details about products {params.productId}</div>
  )
}

export default ProductDetails