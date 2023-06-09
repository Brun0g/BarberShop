import React from "react";
import Coroa from "../../assets/img/55.png";
import Bigode from "../../assets/img/bigode.png";
import "./StylePreco.css";

const precos = ({}) => {
  return (
    <>
      <div className="parallax1">
        <div className="parallax-layer1">
          <div className="title__comp">
            <div className="coroa">
              <img src={Coroa} alt="logo-coroa" />
            </div>
            <h1 className="title-main-container-price">Império do Corte</h1>
            <h1 className="title-main-container-price">Preços</h1>
            <img src={Bigode} alt="" />
          </div>
          <div className="container__title__precos">
            <div className="container__precos">
              <ul className="lista-principal">
                <li className="preco-color">Pezinho</li>
                <li className="preco-color">Sobrancelha</li>
                <li className="preco-color">Barba</li>
                <li className="preco-color">Corte para adultos</li>
              </ul>
              <ul className="lista-principal">
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
              </ul>
              <ul className="lista-principal">
                <li>R$ 7,00</li>
                <li>R$ 7,00</li>
                <li>R$ 15,00</li>
                <li>R$ 20,00</li>
              </ul>
            </div>
            <div className="container__precos">
              <ul className="lista-principal">
                <li className="preco-color">Corte para crianças</li>
                <li className="preco-color">Alisamento</li>
                <li className="preco-color">Luzes</li>
                <li className="preco-color">Platinado</li>
              </ul>
              <ul className="lista-principal">
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
                <li className="lista-principal-tracado">------------------</li>
              </ul>
              <ul className="lista-principal">
                <li>R$ 25,00</li>
                <li>R$ 35,00</li>
                <li>R$ 35,00</li>
                <li>R$ 80,00</li>
              </ul>
            </div>
          </div>
          <div className="horario">
            <div className="horario1">
              <h1>ABERTO DAS 9h00 ÀS 19h00</h1>
              <h2>Segunda a Sábado</h2>
              <h2>Domingo: Fechado</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default precos;
