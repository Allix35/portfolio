import React, { useEffect } from 'react';
import Header from './layout/Header';
import About from "./pages/About";
import Skills from './components/Skills';
import Projects from './pages/Projects';
import Footer from './layout/Footer';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills /> 
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;




