



import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Nav from './component/Nav';
import Info from './component/Info';
import Aproduct from './component/Aproduct';
import Feature from './component/Feature';
import Contactus from './component/Contactus';
import Footer from './component/Footer';




function App() {
  return (

    <>
      <Info />
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Aproduct' element={<Aproduct />} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/Contactus' element={<Contactus />} />

      </Routes>

      <Footer />


    </>

  );
}

export default App;
