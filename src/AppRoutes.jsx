import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

// components
import Home from "./components/Home";
import PageLayout from "./components/PageLayout";
import Shop from "./components/Shop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      TODO:REDIRECT /home TO /
      <Route path="/home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
