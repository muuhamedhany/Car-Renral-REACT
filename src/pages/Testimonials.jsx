import React from 'react';
import HeroDefault from '../components/HeroDefault';
import Feedback from '../components/Feedback';
import BannerAll from '../components/bannerAll';

const Testimonials = () => {
  return (
    <>
      <HeroDefault name="Testimonials" />
      <div>
        <Feedback  />
        <BannerAll />
      </div>
    </>
  );
};

export default Testimonials;
