import React, { useState, useEffect } from "react";
import ScrollButton from "../../assets/img/scroll.png";
import Whatsapp from "../../assets/img/wp.png";
import "./button_scroll.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um event listener para verificar quando a página é rolada
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove o event listener quando o componente é desmontado
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifica a posição atual da rolagem
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Define a visibilidade do botão baseado na posição da rolagem
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    // Rola a página de volta para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=5512987074659&text=" target="_blank">
        <img className="scroll-to-top-button1" src={Whatsapp} alt="↑" />
      </a>
      <button className={`scroll-to-top-button ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
        <img src={ScrollButton} alt="↑" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
