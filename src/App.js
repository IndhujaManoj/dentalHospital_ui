
import Home from "./Components/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
// import Virtualtour from "./Components/Virtualtour";
// import Event from "./Components/Event"
import Smile from "./Components/Smile"
import Treatments from "./Components/Treatments";
import Oralandmaxillifacial from "./Components/Oralandmaxillifacial"
import Orthodontics from "./Components/Orthodontics";
import CosmeticDentistry from "./Components/CosmeticDentistry";
import Dentalveneers from "./Components/Dentalveneers";
import Teethwhitening from "./Components/Teethwhitening";
import Laserdentistry from "./Components/Laserdentistry";
import Pediatricdentistry from "./Components/Pediatricdentistry";
import Sedationdentistry from "./Components/Sedationdentistry";
import Smilemakeover from "./Components/Smilemakeover";
import Dentalbridges from "./Components/Dentalbridges";
import Dentalimplants from "./Components/Dentalimplants";
import RootCanaltreatment from "./Components/Rootcanaltreatment";
import Brushingtechniques from "./Components/Brushingtechniques";
import Teethscaling from "./Components/Teethscaling";
import Dentalcrowns from "./Components/Dentalcrowns";
import "./App.css"


function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          {/* <Route path="/virtual-tour" element={<Virtualtour/>}/> */}
          {/* <Route path="/events" element={<Event/>}/> */}
          <Route path="/smile-gallery" element={<Smile/>}/>
          <Route path="/treatments" element={<Treatments/>}/>
          <Route path="/treatments/oral-maxillofacial" element={<Oralandmaxillifacial/>}/>
          <Route path="/treatments/orthodontics" element={<Orthodontics/>}/>
          <Route path="/treatments/cosmetic-dentistry" element={<CosmeticDentistry/>}/>
          <Route path="/treatments/dental-veneers" element={<Dentalveneers/>}/>
          <Route path="/treatments/teeth-whitening" element={<Teethwhitening/>}/>
          <Route path="/treatments/laser-dentistry" element={<Laserdentistry/>}/>
          <Route path="/treatments/pediatric-dentistry" element={<Pediatricdentistry/>}/>
          <Route path="/treatments/sedation-dentistry" element={<Sedationdentistry/>}/>
          <Route path="/treatments/smile-makeover" element={<Smilemakeover/>}/>
          <Route path="/treatments/dental-bridges" element={<Dentalbridges/>}/>
          <Route path="/treatments/dental-implants" element={<Dentalimplants/>}/>
          <Route path="/treatments/root-canal-treatment" element={<RootCanaltreatment/>}/>
          <Route path="/treatments/brushing-techniques" element={<Brushingtechniques/>}/>
          <Route path="/treatments/teeth-scaling" element={<Teethscaling/>}/>
          <Route path="/treatments/dental-crowns" element={<Dentalcrowns/>}/>
          

          

        </Routes>
      </Router>
      <Footer/>
      
      
    </div>
  );
}

export default App;
