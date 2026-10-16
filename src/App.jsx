import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./css/App.css";
import About from "./components/About";
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Hero />
        <About />
        <Mywork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;
