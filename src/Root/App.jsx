import Navbar from '../Components/Navbar';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Educational from '../Pages/Educational/Educational.JSX';
// import Educational from '../Pages/Educational/Educational.jsx';
import Home from '../Pages/Home/Home';
import Project from '../Pages/Project/Project';
import Skills from '../Pages/Skills/Skills';

function App() {
  return (
    <div className=''>
      <Navbar />

      <section id="home" className="lg:px-25 bg-[#0f172a]">
        <Home/>
      </section>

      <section id="about" className=" bg-[#1c2741]">
        <About />
      </section>

      <section id="Skills" className="lg:px-25 px-6 bg-[#0f172a]">
        <Skills />
      </section>
      <section id="education" className="lg:px-25 px-6 bg-[#1c2741]">
        <Educational/>
      </section>

      <section id="projects" className="">
        <Project />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>
    </div>
  );
}

export default App;
