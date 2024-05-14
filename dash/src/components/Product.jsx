import React from 'react'
import { Link } from 'react-router-dom'
function Product() {
  return (
    <div>
        <p>Product</p>
        <Link to="/" className="underline">
            go to dashboard
        </Link>
        </div>
  )
}

export default Product