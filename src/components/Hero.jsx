import React from "react";

const Hero = ({ home }) => {
  return (
    <section className="hero" ref={home}>
      {/* <h1>Africa Climate Solution & Sustainable Agriculture Network</h1> */}
      <p className="text-lg">
        Fragmented efforts, duplicated resources, and limited knowledge sharing
        impede progress and hinder effective action in combating climate change
      </p>

      <p>
        ACSSAN provides the platform for all stakeholders in climate action and
        sustainable agriculture to coordinate, collaborate, and combine efforts
        to adequately tackle the menace of climate change while producing enough
        food to feed the continent
      </p>
      <button>Join the Network</button>
    </section>
  );
};

export default Hero;
