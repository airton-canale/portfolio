import React, { forwardRef } from "react";
import "./about.css";

const About = forwardRef((props, ref) => {
  return (
    <section
      className="bg-dark-200 flex justify-around z-0 relative py-[6.5%] px-[15%] min-h-[35vh] sobre-mim"
      id="sobre"
      ref={ref}
    >
      <div className="min-w-[30%] sobre-mim__foto">
        <img
          className="w-4/5"
          src="https://github.com/airton-canale.png"
          alt="Me"
        />
      </div>
      <div className="leading-6 w-[70%] sobre-mim__descricao">
        <h1>Sobre mim</h1>
        <h2 className="mb-4">São Marcos, Rio Grande do Sul</h2>
        <p>
          Desenvolvedor web Full-Stack, focado em ReactJS, com conhecimento
          intermediário de Typescript, Python, Ionic e outras tecnologias
          similares.
        </p>
        <div className="flex w-[350px] justify-between mt-8 sobre-mim__descricao-buttons">
          <a
            download="AirtonPortfolio.pdf"
            href="/assets/AirtonPortfolio.pdf"
            title="Portfolio"
          >
            <div className="flex items-center pt-[3px] px-[5px] pb-[5px] justify-evenly w-36 rounded-lg relative bg-dark-100 mt-4 font-semibold text-base tracking-[1.5px] h-10 sobre-mim__descricao-buttons-curriculo">
              <img
                className="pt-[9px] px-0 pb-[5px]"
                src="/assets/cloud-download.png"
                alt="download curriculum"
              />
              <p className="pt-[9px] px-0 pb-[5px]">Currículo</p>
            </div>
          </a>
          <a
            href="mailto: airtonluizcanalefilho@hotmail.com?subject=Airton, vim pelo seu portfólio!"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center pt-[3px] px-[5px] pb-[5px] justify-evenly w-36 rounded-lg relative bg-dark-100 mt-4 font-semibold text-base tracking-[1.5px] h-10 sobre-mim__descricao-buttons-email">
              <img
                className="pt-[9px] px-0 pb-[5px] w-6"
                src="/assets/email.png"
                alt=""
              />
              <p className="pt-[9px] px-0 pb-[5px]">E-mail</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

export default About;
