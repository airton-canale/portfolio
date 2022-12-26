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
      bio: "This is a project that i practice my knowledge of ReactJS and css properties.",
      show: "This application shows a simillar netflix webpage built in ReactJS.",
      stack: ["ReactJS", "JavaScript", "CSS"],
    },
    {
      url: "/assets/projects-images/calculator.png",
      title: "React Calculator",
      redirect: "https://react-calculator.canale.dev",
      bio: "This application shows a calculator similar to the iphone built in ReactJS.",
      stack: ["ReactJS", "JavaScript", "CSS"],
    },
    {
      url: "/assets/projects-images/mario.png",
      title: "Mario Jump",
      redirect: "https://mario-jump.canale.dev/?dashboard",
      bio: "This is a project that I used to practiced my knowledge of CSS animations.",
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      url: "/assets/projects-images/starbucks.png",
      title: "Starbucks Landing Page",
      redirect: "https://starbucks.canale.dev",
      bio: "This application shows starbucks landing page with some animations.",
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      url: "/assets/projects-images/tailwind.png",
      title: "Interface Tailwind",
      redirect: "https://interface-tailwind.canale.dev",
      bio: "This is a project that I used to practice my knowledge of TailwindCSS, ReactJS and learn about i18n library.",
      stack: ["ReactJS", "JavaScript", "Tailwind"],
    },
    {
      url: "/assets/projects-images/weather.png",
      title: "Weather Web",
      redirect: "https://weather.canale.dev",
      bio: "This was my first project that I used to practiced my knowledge of ReactJS and API consumption.",
      stack: ["ReactJS", "JavaScript", "CSS"],
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
      <section class="projetos" id="projetos" data-anime="js-scroll">
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
          <button className="next" onClick={() => instanceRef.current.next()}>
            {">"}
          </button>
        </div>
        <h1>Projetos</h1>
        <div ref={sliderRef} className="keen-slider">
          {projectsCarousel.map((project) => {
            return (
              <div className="keen-slider__slide projects">
                <div>
                  <h1>{project.title}</h1>
                </div>
                <div>
                  <img className="image" src={project.url}></img>
                </div>
                <div>
                  <h2 className="project-bio">{project.bio}</h2>
                </div>
                <div>
                  <ul>
                    {project.stack?.map((t) => {
                      return <li>{t}</li>;
                    })}
                  </ul>
                </div>
                <div className="project-link">
                  <a href={project.redirect} target="_blank">
                    <img src="/assets/link.png" alt="" />
                    <p>Redirect</p>
                  </a>{" "}
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
