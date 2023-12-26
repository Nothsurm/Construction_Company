import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/testimonials' element={<Testimonials />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

