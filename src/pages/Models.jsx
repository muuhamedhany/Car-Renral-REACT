import React from 'react';
import HeroDefault from '../components/HeroDefault';
import BannerAll from '../components/bannerAll';
import VehicleModels from '../components/VehicleModels';

const Models = () => {
  return (
    <>
      <HeroDefault name="Models" />
      <div>
        <VehicleModels />

        <BannerAll mt='30' />
      </div>
    </>
  );
};

export default Models;
