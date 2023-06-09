import React from "react";
import "../servicos/servico.css";
import "../barbeiros/barbeiros.css";
import Barber1 from "../../assets/img/barber1.PNG";

import Barber2 from "../../assets/img/barber2.png";

const barbeiros = () => {
  return (
    <div className="barbeiros">
      <img src={Barber1} alt="" />
      <img src={Barber2} alt="" />
    </div>
  );
};

export default barbeiros;
