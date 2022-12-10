import React from 'react'
import Footer from '../components/Footer/Footer';
import { dropData } from '../data';
import UpComingDrop from '../components/UpcomingDrop/UpComingDrop';
import { Context } from "../context";
import { useContext,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToggle } from '../features/navtoggler/navtoggler';


function Drop() {

   const dispatch=useDispatch()

   useEffect(() => {
     dispatch(setToggle())
   }, []);


  return (
      <>
    <main className="wrapper drops">
      <p className="path">
        Home/ Auctions/ Live bid/<span> Drop </span>
      </p>
      <h1>Upcoming drop</h1>
      <p>Turn on notifications so that no drops will miss you.</p>
      <button className='btn__notification'>Notify me</button>
      <div className="drop__list">
        {
          dropData.map((drop)=>{
            return <UpComingDrop key={drop.id} drop={drop}/>
          })

        }

      </div>
    </main>
    <Footer/>
    </>
  );
}

export default Drop