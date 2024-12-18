import React from "react";
import awunparaLogo from "../assets/awunparaLogo.png";
import sateconsultLogo from "../assets/sateconsultLogo.png";

const Partners = ({partners}) => {
  return (
    <section className="partners" ref={partners}>
      <h2>Partners</h2>
      <div className="partners-logos">
        <img src={awunparaLogo} alt="awunpara Logo" />
        <img src={sateconsultLogo} alt="Sate Consult Logo" />
      </div>
    </section>
  );
};

export default Partners;
