import React, { useRef } from 'react'
import "./news.scss"
import animator1 from "../../assets/animator1.png"
import animator2 from "../../assets/animator2.png"
import animator3 from "../../assets/animator3.png"
import  { useEffect } from 'react';
import { gsap } from 'gsap';
function News() {
  
  
   const images = [animator1, animator2, animator3];

 const ref=useRef()
  const ref2 = useRef()
   const ref3= useRef();
 useEffect(() => {
  // gsap.set("#img",{opacity:0})
   const tl = gsap.timeline({ repeat: -1,repeatDelay:3 });
  tl.set("#img", { opacity: 0 }).fromTo(
    "#img",
    { opacity: 1},
    { opacity: 0, stagger: 3, duration: 6 }
  );
       console.log(ref.current);

 }, []);

  
  return (
    <section className=" news">
      <div className="news__content wrapper">
        <h2 className="news__heading">TOP CREATORS OF THE WEEK</h2>
        <ul className="news__category">
          <li>Editorials</li>
          <li>Fashion</li>
          <li>Lifestyle</li>
          <li>Blueprint</li>
        </ul>
        <div className="news__details">
          <p>
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>

          <div className="cost">
            <p className='text'>circa</p>
            <p className='number'>1985</p>
          </div>
        </div>
      </div>
      <div ref={ref} className="animation__images">
        <div className="animation__images__wrapper">
          <img id="img" src={animator1} alt="Slider image" />
          <img id="img" src={animator2} alt="Slider image" />
          <img id="img" src={animator3} alt="Slider image" />
        </div>
      </div>
    </section>
  );
}

export default News


