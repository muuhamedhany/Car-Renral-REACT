import React from 'react';
import Hero from '../components/Hero';
import Form from '../components/Form';
import Plan from '../components/Plan';
import HomeModels from '../components/HomeModels';
import Banner from '../components/banner';
import Choose from '../components/Choose';
import Feedback from '../components/Feedback';
import FAQ from '../components/FAQ';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Form />
      <Plan />
      <HomeModels />
      <Banner />
      <Choose />
      <Feedback mb='50' />
      <FAQ />
      <AppStore />
    </>
  );
};

export default Home;
