import React from 'react'
import './links.scss'
import bluearrow from "../../assets/bluearrow.svg"

function Links() {
    const links = ["Explore marketplace", "See auctions "];
  return (
    <section className='links '>
        {links.map((link,idx)=>{
            return <div key={idx} className='link'>
                <div className="link__name">{link}</div>
                <a href="" className="link__url">
                    <img src={bluearrow} alt="link" />
                </a>
            </div>
        })}
        

    </section>
  )
}

export default Links