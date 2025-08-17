import React from 'react';
import HeroDefault from '../components/HeroDefault';
import Plan from '../components/Plan';
import AboutComp from '../components/AboutComp';
import BannerAll from '../components/bannerAll.jsx'

const About = () => {
  return (
    <>
      <HeroDefault name="About" />
      <div>
        <AboutComp />

        <Plan />
        <BannerAll mt='30' />
      </div>
    </>
  );
};

export default About;
