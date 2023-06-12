import Title from "./components/title_logo/title";
import Servico from "./components/servicos/servico";
import Footer from "./components/Footer/Footer";
import Lista_precos from "./components/lista_precos/precos";
import Paralaxe from "./components/parallax/parallax";
import ScrollToTopButton from "./components/button_scrol_0/button-scroll";
import Sobre from "./components/about/about";
import Barbeiros from "./components/barbeiros/barbeiros";
import beard from "./assets/img/beard.png";
import hair from "./assets/img/hair.png";
import man from "./assets/img/man.png";

import "./components/title_logo/title.css";
const App = () => {
  return (
    <>
      <Paralaxe />

      <ScrollToTopButton />
      <div id="sobre">
        <Title texto="Sobre nós" background="#222227" textColor={"white"} />
      </div>
      <Sobre />
      <div id="barbeiros">
        <Title texto="Barbeiros" background="#222227" textColor={"white"} />
        <Barbeiros />
      </div>

      <div id="servico">
        <Title texto="Serviços" background="#222227" textColor={"white"} />
      </div>
      <div className="container-serv-app">
        <Servico
          imagem={beard}
          name="Respeito"
          slogan="
Uma barba de respeito é um símbolo de masculinidade e estilo, que exala confiança e cuidado pessoal. É uma expressão única de individualidade e autenticidade."
        />
        <Servico
          imagem={hair}
          name="Estilo"
          slogan="Com cortes e penteados cuidadosamente selecionados, o homem com estilo transmite uma mensagem de confiança e sofisticação."
        />
        <Servico
          imagem={man}
          name="Confiança"
          slogan="A associação entre respeito, estilo e confiança é a chave para uma presença impactante e inspiradora"
        />
      </div>
      <Lista_precos />
      <Footer />
    </>
  );
};

export default App;
