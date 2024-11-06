import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import About from "./Sections/About"
import Services from "./Sections/Services"
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoading(false);
    }, 1800);
    return ()=> clearTimeout(timeout);
  }, [])
  return (
    <>
      {loading && <Loader/>}
      {
        !loading && (
          <>
          <Navbar />
          <Header/>
          <About/>
          <Services/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>
        )
      }
    </>
  );
}

export default App;