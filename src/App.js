import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';
import DragNav from './Components/DragNav';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Quote from './Components/Quote';
import Skills from './Components/Skills';
import { sayings } from './data';
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
      <Fade top distance="20%" duration={1500}> 
        <Home />
        <Quote saying={sayings[0]} />
        <About />
        <Quote saying={sayings[1]}  />
        <Skills />
        <Quote saying={sayings[2]}  />
        <Projects />
        <Quote saying={sayings[3]}  />
        <Contact />
        <Copyright />
      </Fade>
      <DragNav />
    </>
  );
}

export default App;
