/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";

import whatsapp from "../../assets/img/whatsapp.png";
import logo from "../../assets/img/logo.png";

const footerTest = () => {
  return (
    <div className="footer">
      <div className="footer-content footer-padding">
        <div className="footer-links">
          <iframe
            width="400"
            height="300"
            src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Av.%20Pico%20das%20Agulhas%20Negras%2C%201184%20-%20Jardim%20Altos%20de%20Santana+(Imp%C3%A9rio%20do%20Corte)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <div className="content">
            <div className="logo-barber">
              <img src={logo} alt="logo" />
            </div>
            <p>Our barbershop is the created for men who appreciate premium quality, time and flawless look.</p>

            <div className="socialMedia">
              <p>
                <img src={facebook} alt="Facebook" />
              </p>
              <p>
                <a href="https://instagram.com/imperio_do_corte_2019?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                  <img src={whatsapp} alt="Instagram" />
                </a>
              </p>
              <p>
                <a href="https://instagram.com/imperio_do_corte_2019?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                  <img src={instagram} alt="Instagram" />
                </a>
              </p>
            </div>
          </div>

          <div className="content contato">
            <h4>Onde Estamos</h4>
            <p>Av. Pico Das Agulhas N°1184</p>
            <p className="endereco-email">barbearia_imperiodocorte@hotmail.com</p>
            <p>Tel: (12) 987074659 | (12) 988094960</p>
            <p></p>
          </div>

          <div className="content email">
            <h4>Fale Conosco</h4>
            <input type="email" name="email" className="input-email" placeholder="Digite seu e-mail" />
            <button type="submit" className="botao-email">
              ENVIAR
            </button>
          </div>
        </div>

        <hr size="1" />

        <div className="footer-below">
          <div className="copyright">
            <p>Copyright®{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerTest;
