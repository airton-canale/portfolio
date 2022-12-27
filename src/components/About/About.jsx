import React, { forwardRef } from "react";
import "./about.css";

const About = forwardRef((props, ref) => {

  return (
    <section class="sobre-mim" id="sobre" ref={ref}>
      <div class="sobre-mim__foto">
        <img src="https://github.com/airton-canale.png" alt="Me" />
      </div>
      <div class="sobre-mim__descricao">
        <h1>Sobre mim</h1>
        <h2>São Marcos, Rio Grande do Sul</h2>
        <p>
        Desenvolvedor web Full-Stack, focado em ReactJS, com  conhecimento intermediário de Typescript, Python, Ionic e outras tecnologias similares.
        </p>
        <div class="sobre-mim__descricao-buttons">
          <a href="" download="">
            <div class="sobre-mim__descricao-buttons-curriculo">
              <img src="/assets/cloud-download.png" alt="download curriculum" />
              <p>Currículo</p>
            </div>
          </a>
          <a
            href="mailto: airtonluizcanalefilho@hotmail.com?subject=Airton, vim pelo seu portfólio!"
            target="_blank"
          >
            <div class="sobre-mim__descricao-buttons-email">
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
