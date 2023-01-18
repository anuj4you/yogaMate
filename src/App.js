import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero/>
        <Benefits/>
        <AboutUs/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
