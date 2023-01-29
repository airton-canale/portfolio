import React, { useEffect, useState } from "react";
import "./home.css";

const Home = ({ onScrollClick }) => {
  const [display, setDisplay] = useState("");
  const name = "Airton Canale";

  useEffect(() => {
    name.split("").forEach((c, i) => {
      setTimeout(() => setDisplay((prev) => name.slice(0, i + 1)), 180 * i);
    });
  }, []);

  return (
    <section className="principal" id="home">
      <div className="principal__left">
        <h1>Olá, eu sou</h1>
        <span className="principal__sentence">{display}</span>
        <span className="principal__input-cursor"></span>
        <h1>Desenvolvedor Front-End</h1>
        <div className="principal__botao">
          <a href="https://www.linkedin.com/in/airton-canale/" target="_blank">
            <div className="principal__botao-linkedin">
              <img src="/assets/linkedin.png" alt="linkedin" />
              <p>LinkedIn</p>
            </div>
          </a>
          <a href="https://github.com/airton-canale" target="_blank">
            <div className="principal__botao-github">
              <img src="/assets/github.png" alt="github" />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
      <div className="principal__right">
        <img
          src="/assets/image-undraw.svg"
          alt="Ilustração representando uma desenvolvedora sentada na cadeira mexendo no notebook com ambiente em volta."
          data-tilt
        />
      </div>
      <div class="scroll">
        <a onClick={onScrollClick}>
          {" "}
          <p class="inline"> scroll down </p>
          <img class="inline" src="/assets/scroll.png" alt="scroll" />
        </a>
      </div>
    </section>
  );
};

export default Home;
