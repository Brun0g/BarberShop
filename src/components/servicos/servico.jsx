import React from "react";
import "./servico.css";

const Servico = ({ imagem, name, slogan, color }) => {
  const style = {
    color: color,
  };

  return (
    <section>
      <div className="type-service">
        <div className="crown-container">
          <img className="crown-image" src={imagem} alt="" />
        </div>
        <h3>{name}</h3>
        <div className="describe-service">
          <div className="slogan" style={style}>
            {slogan}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servico;
