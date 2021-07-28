import React from "react";
import Steeps from "../../componets/Steeps/Steeps";
import ContactForm from "../../componets/ContactForm/ContactForm";

function Home() {
  return (
    <React.Fragment>
      <h1 className="text-center">Contrata SIN aval y 
      realiza todo 100% online</h1>
      <Steeps />
      <ContactForm />
    </React.Fragment>
  );
}

export default Home;
