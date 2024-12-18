import React from "react";

const Contact = ({contact}) => {
  return (
    <section className="contact" ref={contact}>
      <h2>Contact Us</h2>
      <div className="contact-info">
        <address>Tumu-Bolga highway, opposite the stadium</address>
        <email>mail.acssan@gmail.com</email>
        <tel>+233244686431</tel>
      </div>
    </section>
  );
};

export default Contact;
