import React from 'react'
import "./products.scss"
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    const{url, name,price,id}=product
  return (
    <Link to={id} className='product'>
        <div className="product__image">
            <img src={url} alt={name} />
        </div>
        <div className="product__details">
            <p className="product__name">{name}</p>
            <p className="product__price">$ {price?.usd}</p>
        </div>

    </Link>
  )
}

export default ProductCard