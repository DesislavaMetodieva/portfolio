import './App.css';
import Hero from './components/Hero/Hero'
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Testimonial from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="app">
   
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
