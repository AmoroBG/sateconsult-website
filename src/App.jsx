import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
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
        services={services}
        contact={contact}
        scrollToSection={scrollToSection}
      />

      <Hero home={home} />
      <About about={about} />
      <Services services={services} />
      <Contact contact={contact} />
      <ScrollToTop />
    </div>
  );
}

export default App;
