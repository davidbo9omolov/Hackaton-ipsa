import './App.css';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Conditions from "../components/conditions/Conditions";
import Timeline from "../components/timeline/Timeline";
import Sponsors from "../components/sponsors/Sponsors";
import Speakers from "../components/speakers/Speakers";
import Partners from "../components/partners/Partners";
import Header from "../components/header/Header";
import React from "react";
import Footer from "../components/footer/Footer";

function App() {
  return (
      <>
          <Header/>
          <main>
              <Home/>
              <About/>
              <Conditions/>
              <Timeline/>
              <Sponsors/>
              <Speakers/>
              <Partners/>
          </main>
          <Footer />
      </>

  );
}

export default App;
