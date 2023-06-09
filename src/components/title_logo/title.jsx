import React from "react";
import bigode from "../../assets/img/bigode.png";
import "../title_logo/title.css";
import coroa from "../../assets/img/55.png";

const Title = ({ texto, background, textColor }) => {
  const containerStyle = {
    backgroundColor: background,
    color: textColor,
  };

  return (
    <div className="container__title" style={containerStyle}>
      <div className="coroa">
        <img src={coroa} alt="" />
      </div>
      <div className="title__comp">
        <h1 className="Title__main__container">Império do Corte</h1>
        <h2 className="Title__main__container">{texto}</h2>
      </div>
      <div className="description__main">
        <div className="bigode">
          <img src={bigode} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
