import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useRef } from "react";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();


  return (
    <div className="App">
      <Navbar
        links={[
          {
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            title: "Home",
          },
          {
            onClick: () =>
              aboutRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            title: "Sobre",
          },
          {
            onClick: () =>
              experienceRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            title: "Experiência",
          },
          {
            onClick: () =>
            projectsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            title: "Projetos",
          },
        ]}
      />
      <Home
        onScrollClick={() =>
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
