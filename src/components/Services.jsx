import React from "react";
import livelihoodImage from "../assets/livelihood.png";
import climateImage from "../assets/climate.png";
import agricultureImage from "../assets/agriculture.png";

const Services = ({services}) => {
  return (
    <section className="programs" ref={services}>
      <h2>Our Services</h2>
      <div className="program-lists">
        <div className="livelihood">
          <img src={livelihoodImage} alt="" />
          <h4>Alternative livelihood programs</h4>
          <p>
            Our alternative livelihood programs disengage rural inhabitants from
            unfriendly climate resilient activities
          </p>
        </div>
        <div className="climate">
          <img src={climateImage} alt="" />
          <h4>Cimate action</h4>
          <p>
            We use integrated approaches to climate action, focusing on
            advocacy, sensitization, literacy, and justice
          </p>
        </div>
        <div className="agriculture">
          <img src={agricultureImage} alt="" />
          <h4>Sustainable agriculture</h4>
          <p>
            We undertake strategic approaches to promoting sustainable
            agriculture without endagering the environment
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
