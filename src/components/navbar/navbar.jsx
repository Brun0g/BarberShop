import React, { useEffect } from "react";
import "./style.css";
import "../../assets/fonts/Top_Secret.ttf";

const Navbar = () => {
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");

    const animateLinks = () => {
      navLinks.forEach((link, index) => {
        link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    };

    const handleClick = () => {
      navList.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      animateLinks();
    };

    if (mobileMenu) {
      mobileMenu.addEventListener("click", handleClick);
    }

    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <header>
      <nav>
        <a class="logo" href="https://instagram.com/imperio_do_corte_2019?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
          Império do Corte Barbearia
        </a>
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
          <li className="nav-list-links">
            <a href="#">Home</a>
          </li>
          <li className="nav-list-links">
            <a href="#sobre">Sobre</a>
          </li>

          <li className="nav-list-links">
            <a href="#barbeiros">Barbeiros</a>
          </li>
          <li className="nav-list-links">
            <a href="#servico">Serviços</a>
          </li>

          <li>
            <a href="https://api.whatsapp.com/send?phone=5512987074659&text=" target="_blank" className="button-primary1">
              AGENDAR HORÁRIO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
