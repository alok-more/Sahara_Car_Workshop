import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ppf from "./components/services comp/ppf";
import Home from "./pages/home";
import Enquiry from "./pages/enquiry";
import About from "./pages/about";
import Ceramic from "./components/services comp/ceeramic";
import BodyShop from "./components/services comp/body_shop";
import Insurance from "./components/services comp/insurence";
import Mod from "./components/services comp/Mod";
import Wrap from "./components/services comp/wrap";
import Clean from "./components/services comp/cleaning";
import Other from "./components/services comp/other";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ceramic and Graphene coatings" element={<Ceramic />} />
          <Route path="/Paint protection films" element={<Ppf/>}/>
          <Route path="/Body-shop (Denting & Painting)" element={<BodyShop />} />
          <Route path="/Detailing and Interior cleaning" element={<Clean/>}/>
          <Route path="/Wrap Jobs" element={<Wrap />} />
          <Route path="/Insurance Claim" element={<Insurance/>}/>
          <Route path="/Interior Modification" element={<Mod />} />
          <Route path="/Other Services" element={<Other/>}/>
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
