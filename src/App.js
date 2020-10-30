import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Discography from "./components/Discography";
import Audio from "./components/Audio";
import Visual from "./components/Visual";
import About from "./components/About";
import MailList from "./components/MailList";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App container">
      <div className="wrapper">
        <Menu />
        <div className="container">
          <Visual />
          <Events />
          <About />
          <Audio />
          <Discography />
          <Contact />
          <MailList />
          {/* <Audio path="/audio" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
