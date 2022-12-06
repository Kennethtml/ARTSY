import React from 'react'
import creator1 from '../../assets/creator1.jpg'
import creator2 from "../../assets/creator2.jpg";
import creator3 from "../../assets/creator3.jpg";
import creator4 from "../../assets/creator4.jpg";
import creator5 from "../../assets/creator4.jpg";

import circlearrow from "../../assets/circleArrow.svg"
import { Link } from 'react-router-dom';

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
      <div
        className="feature__image"
        style={direction === "right" ? { order: 1 } : {}}
      >
        <img src={image} alt="feature" />
      </div>
      <div className="feature__text">
        <h3>{title}</h3>
        <p>{about}</p>
        <div className="creators">
          {creators.map((creator, id) => {
            return <img key={id} src={creator.img} />;
          })}

          <p className="creators__number">64 major creators</p>
          <Link className="link">
            <svg
              width="40"
              height="26"
              viewBox="0 0 40 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z"
                fill="#616161"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard