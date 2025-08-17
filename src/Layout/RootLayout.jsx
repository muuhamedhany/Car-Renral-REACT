import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import ScrollUp from '../components/ScrollUp';

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <ThemeToggle />
      <ScrollUp />
      <Footer />
    </>
  );
};

export default RootLayout;
