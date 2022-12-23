import React from "react";
import "./header.scss";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.jpg";
import { gsap } from "gsap";
import { useState,useEffect } from "react";

import heromobile from '../../assets/heroimages.jpg'
import { useRef } from "react";



function Header() {
// const [id, setId] = useState(1);
let tl = gsap.timeline({repeat:-1});
const ref1=useRef()
const ref2 = useRef();
const ref3 = useRef();


let id=1
function recurse(el){
  console.log(el)
  while(id<5){

    gsap.to(el,{xPercent:id* -100})
    id++
    recurse(el)
  }
    
}


function animate( elements) {
  elements.forEach((index,ind)=>{
    // gsap.to(index, { xPercent: ind * -100,duration:2 });

    recurse(index)
    
  })
  
 

 
}

useEffect(() => {
  animate([ref1.current,ref2.current,ref3.current]);


}, []);




  return (
    <header className="heading">
      <div className="heading__text">
        <h1 className="heading__text-header">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="heading__text-paragraph">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="heading__carousel-mobile">
        <img src={heromobile} alt="" />
      </div>
      <div className="heading__carousel">
        <div className="carousel-1">
          <div className="carousel__wrapper" ref={ref1} id="img1">
            <img src={carousel1} alt="carousel image" />

            <img src={carousel2} alt="carousel image" />

            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
          </div>
        </div>

        <div className="carousel-2">
          <div className="carousel__wrapper " ref={ref2} id="img2">
            <img src={carousel2} alt="carousel image" />

            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-3">
          <div className="carousel__wrapper" ref={ref3} id="img3">
            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-4">
          <div className="carousel__wrapper">
            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
            <img src={carousel3} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-5">
          <div className="carousel__wrapper">
            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
            <img src={carousel3} alt="carousel ☻image" />
            <img src={carousel4} alt="carousel image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
