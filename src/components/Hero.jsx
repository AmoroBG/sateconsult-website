import React from "react";

const Hero = ({ home }) => {
  return (
    <section className="hero" ref={home}>
      <h1>Africa Climate Solution & Sustainable Agriculture Network</h1>
      <p>
        Fragmented efforts, duplicated resources, and limited knowledge sharing
        among organizations and individuals working on climate change and
        sustainable agriculture impede progress and hinder effective action in
        combating climate change, food insecurity, zero hunger, and poverty.
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
