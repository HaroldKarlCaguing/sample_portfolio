import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./aboutme";

// import Contact from "./contact";



function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutme" element={<About/>}></Route>
      {/* <Route path="/contact" element={<Contact/>}></Route> */}
    </Routes>
      
    
    </BrowserRouter>
   
    </>
    
  );
}

export default App;
