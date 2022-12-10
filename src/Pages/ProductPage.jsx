import React from 'react'
import { useEffect } from 'react';
import {useParams } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { getMarket } from "../features/Market/market";


function ProductPage() {
    const navigate=useParams()
    const id=navigate.id
     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(getMarket());
     },[id]);
const {marketData}=useSelector((store)=>store.market)

    

    console.log(marketData);
    const currentProduct=marketData.products.filter((product)=>product.id===id)
   
  return (
    <div>
        {currentProduct.map(product=>{
            return <div>
                <h1>{product.name}</h1>
                <img src={product.url} alt={product.name}  />
            </div>
        })}
    </div>
  )
}

export default ProductPage