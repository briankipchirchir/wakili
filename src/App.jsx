import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Community from "./pages/Community.jsx";
import Contact from "./pages/Contact.jsx";
import Football from "./pages/Sports.jsx";
import Education from "./pages/Education.jsx";
import Youth from "./pages/Youth.jsx";
import BodaBoda from "./pages/BodaBoda.jsx";
import Environment from "./pages/Environment.jsx";
import Sports from "./pages/Sports.jsx";
import LegalAid from "./pages/LegalAid.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/football" element={<Football />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/education" element={<Education />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/bodaboda" element={<BodaBoda />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/legal-aid" element={<LegalAid />} />
      </Routes>
      <Footer />
    </Router>
  );
}

