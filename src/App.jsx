import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Models from './pages/Models';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models" element={<Models />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
