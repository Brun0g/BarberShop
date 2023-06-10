import React from "react";
import "../about/about.css";

const about = () => {
  return (
    <>
      <div className="about-container">
        <div className="description-about">
          <div className="texto-about">
            <div className="galeria">
              <div className="galeria-div"></div>
              <div className="galeria-div"></div>
              <div className="galeria-div"></div>
              <div className="galeria-div"></div>
            </div>
            <p>
              A Barbearia Império do Corte começou em 2019, quando dois amigos decidiram abrir uma barbearia. Eles se dedicaram ao aprendizado do ofício e conquistaram clientes oferecendo serviços de qualidade. Ao longo dos anos, expandiram e
              atualmente operam em uma nova e ampla barbearia. Estão determinados a continuar crescendo e atendendo às demandas do mercado. Agradecem a todos que os apoiaram e se sentem motivados a buscar a excelência no trabalho. Querem proporcionar
              uma experiência única e acolhedora aos clientes. Estão ansiosos para o futuro e para crescer ainda mais como profissionais, compartilhando sua paixão com os clientes.
              <div className="container-button-about">
                <button className="button-primary3" href="">
                  SAIBA MAIS
                </button>
              </div>
            </p>
            <div className="galeria">
              <div className="galeria2-div"></div>
              <div className="galeria2-div"></div>
              <div className="galeria2-div"></div>
              <div className="galeria2-div"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
