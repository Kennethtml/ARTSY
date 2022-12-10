import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMarket } from '../features/Market/market'
import { store} from "../store"


function Market() {
    const dispatch=useDispatch()
    


    useEffect(()=>{
        dispatch(getMarket())
    },[])

    const{isLoading,marketData}=useSelector(store=>store.market)
 console.log(isLoading,marketData.products);
 
  return (
    <>
      {isLoading && <h1>loading</h1>}
      <div className='wrapper'>
        {
            marketData?.products?.map((product)=>{
                return <div>
                    <h1>{product.name}</h1>
                    <img src={product.url} alt="" />
                </div>

            })
        }

      </div>
    </>
  );
}

export default Market