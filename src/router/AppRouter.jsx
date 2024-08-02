import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Experience from '../components/pages/Experience';
import Skills from '../components/pages/Skills';
import Works from '../components/pages/Works';
import Contact from '../components/pages/Contact';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/experience" element={<Experience />} /> */}
      <Route path="/skills" element={<Skills />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
