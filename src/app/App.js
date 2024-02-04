import './App.css';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Conditions from "../components/conditions/Conditions";
import Timeline from "../components/timeline/Timeline";
import Sponsors from "../components/sponsors/Sponsors";
import Speakers from "../components/speakers/Speakers";
import Partners from "../components/partners/Partners";

function App() {
  return (
       <main>
          <Home/>
           <About/>
           <Conditions/>
           <Timeline/>
           <Sponsors/>
           <Speakers/>
           <Partners/>
       </main>
  );
}

export default App;
