import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMarket } from '../features/Market/market'
import { store} from "../store"
import ProductCard from '../components/ProductCard/ProductCard'
import "./../components/ProductCard/products.scss";


function Market() {
    
    const dispatch=useDispatch()
    


    useEffect(()=>{
        dispatch(getMarket())
    },[])

    const{isLoading,marketData}=useSelector(store=>store.market)
    const products=marketData.products

    console.log(products);
 
  return (
    <>
      {isLoading && <h1>loading</h1>}
      <div className='wrapper'>
        <div className="products">

        {
            products?.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
                
            })
        }
        </div>

      </div>
    </>
  );
}

export default Market