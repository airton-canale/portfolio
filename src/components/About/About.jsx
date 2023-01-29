import React, { forwardRef } from "react";
import "./about.css";

const About = forwardRef((props, ref) => {

  return (
    <section className="sobre-mim" id="sobre" ref={ref}>
      <div className="sobre-mim__foto">
        <img src="https://github.com/airton-canale.png" alt="Me" />
      </div>
      <div className="sobre-mim__descricao">
        <h1>Sobre mim</h1>
        <h2>São Marcos, Rio Grande do Sul</h2>
        <p>
        Desenvolvedor web Full-Stack, focado em ReactJS, com  conhecimento intermediário de Typescript, Python, Ionic e outras tecnologias similares.
        </p>
        <div className="sobre-mim__descricao-buttons">
          <a href="" download="">
            <div className="sobre-mim__descricao-buttons-curriculo">
              <img src="/assets/cloud-download.png" alt="download curriculum" />
              <p>Currículo</p>
            </div>
          </a>
          <a
            href="mailto: airtonluizcanalefilho@hotmail.com?subject=Airton, vim pelo seu portfólio!"
            target="_blank"
          >
            <div className="sobre-mim__descricao-buttons-email">
              <img src="/assets/email.png" alt="" />
              <p>E-mail</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;
