import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Programs from "./components/Programs";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const home = useRef(null);
  const about = useRef(null);
  const programs = useRef(null);
  const partners = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header
        home={home}
        about={about}
        programs={programs}
        partners={partners}
        contact={contact}
        scrollToSection={scrollToSection}
      />
    
      <Hero home={home} />
      <About about={about} />
      <Programs programs={programs} />
      <Partners partners={partners} />
      <Contact contact={contact} />
      <ScrollToTop />
    </div>
  );
}

export default App;
