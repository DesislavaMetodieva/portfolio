import './App.css';
import Hero from './components/Hero/Hero'
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Testimonial from './components/Testimonials/Testimonials';
import { useContext } from "react";
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";


function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="app">
      <DotRing />
      
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      
      <Hero />
      <Social />
      <Project />
      <ProjectPage />
      <Testimonial />
      <Footer />
    
    
    </div>
  );
}

export default App;
