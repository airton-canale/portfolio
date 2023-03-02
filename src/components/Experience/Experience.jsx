import React, { useState, forwardRef } from "react";
import "./experience.css";

const Experience = forwardRef((props, ref) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section
      className="py-[6.5%] px-[15%] min-h-[35vh] experiencia"
      id="experiencia"
      data-anime="js-scroll"
      ref={ref}
    >
      <h1>Experiência</h1>
      <div className="flex experiencia__wrapper">
        <section className="w-[200px] pointer experiencia__lugares">
          <ul className="p-0" data-tab="menu">
            <li
              className={selectedTab === 0 && "active"}
              onClick={() => setSelectedTab(0)}
            >
              ConcordiaLabs
            </li>
            <li
              className={selectedTab === 1 && "active"}
              onClick={() => setSelectedTab(1)}
            >
              DipSystem
            </li>
          </ul>
        </section>
        <div className="w-3/5 relative ml-[5rem] experiencia__descricao" data-tab="content">
          {
            [
              <section key={1} className="show-right">
                <h2>Desenvolvedor Front-End</h2>
                <span>Jul 2022 - O momento</span>
                <p className="experiencia__descricao-local">
                  Concordia Labs - Freelancer
                </p>
                <ul>
                  <li>JavaScript</li>
                  <li>React Js</li>
                  <li>Python</li>
                  <li>Django</li>
                </ul>
              </section>,
              <section key={2} className="show-right">
                <h2>Desenvolvedor Full-Stack </h2>
                <span>Ago 2022 - O momento</span>
                <p className="experiencia__descricao-local">
                  Dip System - Tempo Integral
                </p>
                <ul>
                  <li>JavaScript</li>
                  <li>Typescript</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Ionic</li>
                </ul>
              </section>,
            ][selectedTab]
          }
        </div>
      </div>
    </section>
  );
});

export default Experience;