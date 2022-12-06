import React from 'react'
import "./upcomingDrop.scss"

function UpComingDrop({drop}) {
    const{button,date,name,about,creator,link,liveButton,image,time}=drop
    const buttonclr=(btn)=>{
        if(btn==="coming"){
            return "#4693ED";
        }
        else if(btn==="live now"){
            return "#3EA03B"

        }
        else{
            return "#999EA5"
        }

    }

  return (
    <div className='drop'>
        <div className="drop__image">
            <img src={image} alt="drop" />
            
        </div>
        <div className="drop__details">
            <button style={{background:`${buttonclr(button)}`}} >{button}</button>
            <p className="date">{date}</p>
            <h2 className="name">{name}</h2>
            <p className="about">{about}</p>
            <p className='creator'>creator: <span>{creator}</span></p>
            <a href="#" className="link">{link}</a>


        </div>

    </div>
  )
}

export default UpComingDrop