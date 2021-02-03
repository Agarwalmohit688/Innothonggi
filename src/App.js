import './App.css';
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Overview from "./Components/Overview"
import Join from "./Components/Join"
import Faq from "./Components/Faq"
// import Slider from './Components/Slider'
import RegisterUs from "./Components/RegisterUs"
import Backend from "./Components/Backend"
import Contact from "./Components/Contact"
import Subscribe from "./Components/Subscribe"
import Footer from "./Components/Footer"
import Sliders from "./Components/Sliders"


// import {Route,Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />   
    <Overview />
    <Join />
    <Faq />
    <RegisterUs />
    <Contact />
    <Sliders />
    <Backend />
    <Subscribe />
    <Footer />
  
    
    {/* <Slider /> */}

  

    </div>
  );
}

export default App;
