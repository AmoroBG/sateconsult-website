import React from "react";
import awunparaLogo from "../assets/awunparaLogo.png";
import sateconsultLogo from "../assets/sateconsultLogo.png";

const Partners = ({ partners }) => {
  return (
    <section className="partners" ref={partners}>
      <h2>Partners</h2>
      <p>
        We are not in this alone. We are supported and trusted by other players
        in the space
      </p>
      <div className="partners-logos">
        <img src={awunparaLogo} alt="awunpara Logo" />
        <img src={sateconsultLogo} alt="Sate Consult Logo" />
      </div>
    </section>
  );
};

export default Partners;
