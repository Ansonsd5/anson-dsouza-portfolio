import "./App.css";
import About from "./compoents/About";
import Experience from "./compoents/Experience";
import Footer from "./compoents/Footer";
import Header from "./compoents/Header";
import Projects from "./compoents/Projects";
import { socialConnections } from "./utils/config";


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects/>
      <Experience />
      <Footer linkData={socialConnections}/>
    </div>
  );
}

export default App;
