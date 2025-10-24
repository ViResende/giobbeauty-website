import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ScrollTopLegal from "./components/ScrollTopLegal"; 

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow w-full scroll-smooth">
        <ScrollTopLegal /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;




