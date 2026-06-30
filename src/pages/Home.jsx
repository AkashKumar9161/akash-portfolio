import MainLayout from "../components/layout/MainLayout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </MainLayout>
  );
}

export default Home;