import React from "react";
import "./parallax.css";
import Button from "../button_horario/button_hrs";
import Whatsapp from "../../assets/img/wp.png";
const Parallax = ({}) => {
  return (
    <div className="parallax">
      <div className="parallax-layer">
        <h1>BEM-VINDO AO IMPÉRIO DO CORTE</h1>
        <p>Nossa barbearia foi criada para homens que apreciam qualidade premium, tempo e aparência impecável.</p>
        <p>Endereço: Av. Pico Das Agulhas N°1184 </p>
        <div className="wp-main">
          <img className="wp" src={Whatsapp} alt="" />
          <div className="wp-container">Everton: (12) 987074659</div>
        </div>
        <div className="wp-main">
          <img className="wp" src={Whatsapp} alt="" />
          <div className="wp-container">Junior: (12) 988094960</div>
        </div>
        <p className="description-parallax"></p>
        <div className="button-padding-parallax ">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
