import React from "react";

import { useState } from "react";

import "./agendamento.css";

const agendamento = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  // Receber os dados dos campos do formulário
  const valorInput = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const sendMsg = async (e) => {
    // Bloquear o recarregamento da página
    e.preventDefault();

    console.log(`Nome: ${data.name}`);
    console.log(`E-mail: ${data.email}`);
    console.log(`Assunto: ${data.subject}`);
    console.log(`Conteúdo: ${data.content}`);
  };

  return (
    <div className="main__container__msg">
      <div className="form">
        <h2 className="agendar__horario_title">Agendar Horário</h2>
        <div className="form__container">
          <form action="" onSubmit={sendMsg}>
            <input className="form_input" type="text" name="name" placeholder="Seu nome" onChange={valorInput} value={data.name} />
            <input className="form_input" type="email" name="email" placeholder="Seu E-mail" onChange={valorInput} value={data.email} />
            <input className="form_input" type="text" name="subject" placeholder="Seu telefone" onChange={valorInput} value={data.subject} />
            <input className="form_text_send" name="content" cols="30" rows="10" placeholder="Sua mensagem" onChange={valorInput} value={data.content}></input>
            <button className="button-primary" type="submit">
              AGENDAR HORÁRIO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default agendamento;

{
  /* <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="http://www.googlemapsgenerator.com/da/">googlemapsgen (da)</a> & <a href="https://unoregler.com/">regler uno</a></small></div><style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br /></div> */
}
{
  /* <div><div style="width: 700px;position: relative;"></div> */
}
