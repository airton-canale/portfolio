import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./projects.css";

const Projects = () => {
  const projectsCarousel = [
    {
      url: "/assets/projects-images/netflix.png",
      title: "Netflix Clone",
      redirect: "https://react-calculator.canale.dev",
    },
    {
      url: "/assets/projects-images/calculator.png",
      title: "React Calculator",
      redirect: "https://react-calculator.canale.dev",
    },
    {
      url: "/assets/projects-images/mario.png",
      title: "Mario Jump",
      redirect: "https://mario-jump.canale.dev/?dashboard",
    },
    {
      url: "/assets/projects-images/starbucks.png",
      title: "Starbucks Landing Page",
      redirect: "https://starbucks.canale.dev",
    },
    {
      url: "/assets/projects-images/tailwind.png",
      title: "Interface Tailwind",
      redirect: "https://interface-tailwind.canale.dev",
    },
    {
      url: "/assets/projects-images/weather.png",
      title: "Weather Web",
      redirect: "https://weather.canale.dev",
    },
  ];
  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged() {},
  });

  return (
    <>
      <div className="container-images">
        {projectsCarousel.map((project, i) => {
          return (
            <img
              onClick={() => instanceRef.current.moveToIdx(i)}
              className="images"
              src={project.url}
              alt={project.title}
            />
          );
        })}
      </div>
      <section class="projetos" id="projetos" data-anime="js-scroll">
        <h1>Projetos</h1>
        <div ref={sliderRef} className="keen-slider">
          {projectsCarousel.map((project) => {
            return (
              <div className="keen-slider__slide projects">
                <div>
                  <h1>{project.title}</h1>
                </div>
                <img
                  className="projects"
                  src={project.url}
                  alt={project.title}
                />
                <div className="project-link">
                  <a href={project.redirect}>Redirect</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
