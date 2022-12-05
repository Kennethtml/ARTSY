import React from 'react'
import './features.scss'
import FeatureCard from '../FeatureCard/FeatureCard';

// image imports
import feature1 from "../../assets/featured1.jpg"
import feature2 from "../../assets/featured2.jpg";
import feature3 from "../../assets/featured3.jpg";

function Features() {
    const contents = [
      {
        image: feature1,
        title: "The Boolean Egyptian",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
        direction: "left",
      },
      {
        image: feature2,
        title: "The Boolean Egyptian",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
        direction: "right",
      },
      {
        image: feature3,
        title: "The Boolean Egyptian",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
        direction: "left",
      },
    ];
  return (
    <section className="features wrapper">
      <h2>Featured products</h2>
      {contents.map((content, id) => {
        return <FeatureCard key={id} {...content} />;
      })}
    </section>
  );
}

export default Features