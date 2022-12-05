import React from 'react'
import creator1 from '../../assets/creator1.jpg'
import creator2 from "../../assets/creator2.jpg";
import creator3 from "../../assets/creator3.jpg";
import creator4 from "../../assets/creator4.jpg";
import creator5 from "../../assets/creator4.jpg";

import circlearrow from "../../assets/circlearrow.svg"

function FeatureCard({image,title,about,direction}) {
const creators = [
  {
    img: creator1,
  },
  {
    img: creator2,
  },
  {
    img: creator3,
  },
  {
    img: creator4,
  },
  {
    img: creator5,
  },
];

  return (
    <div className="feature">
      <img src={image} alt="feature"  style={direction==="right"?{order:1}:{}}/>
      <div className="feature__text">
        <h3>{title}</h3>
        <p>{about}</p>
        <div className="creators">
          
            {creators.map((creator, id) => {
              return <img key={id} src={creator.img} />;
            })}
         
          <p className="creators__number">64 major creators</p>
          <div className="link">
            <img src={circlearrow} alt="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard