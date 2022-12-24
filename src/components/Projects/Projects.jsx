import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./projects.css";

const Projects = () => {
  const projectsCarousel = [
    {
      url: "/assets/projects-images/netflix.png",
      title: "Netflix Clone",
      redirect: "https://react-calculator.canale.dev",
      stack: ['ReactJS', 'JAVASCRIPT']
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    instanceRef.current.on("slideChanged", (a) =>
      setActiveSlide(a.track.details.abs)
    );
  }, []);

  return (
    <>
      <div className="container-images">
        <button className="prev" onClick={() => instanceRef.current.prev()}>
          {"<"}
        </button>
        {projectsCarousel.map((project, i) => {
          return (
            <>
              <img
                onClick={() => instanceRef.current.moveToIdx(i)}
                className={["images", activeSlide === i && "active-project"]
                  .filter(Boolean)
                  .join(" ")}
                src={project.url}
                alt={project.title}
              />
            </>
          );
        })}
        <button className="next" onClick={() => instanceRef.current.next()}>{">"}</button>
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
                <div>
                  {/* <ul>
                    {project.stack.map((t) => {
                    return (
                        <li></li>
                    )
                  })}
                </ul> */}
                </div>
                {/* <img
                  className="projects"
                  src={project.url}
                  alt={project.title}
                /> */}
                <div className="project-link">
                  {/* <button>a</button> */}
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
