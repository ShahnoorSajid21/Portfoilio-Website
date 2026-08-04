import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsGrid from '../components/ProjectsGrid';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Community from '../components/Community';

export default function Home({ onOpenProject }) {
  return (
    <>
      <Hero />
      <About />
      <ProjectsGrid onOpenProject={onOpenProject} />
      <Experience />
      <Education />
      <Skills />
      <Community />
    </>
  );
}
