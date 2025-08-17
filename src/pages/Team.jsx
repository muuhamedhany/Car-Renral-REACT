import React from 'react';
import HeroDefault from '../components/HeroDefault';
import TeamDetails from '../components/TeamDetails'
import BannerAll from '../components/bannerAll'

const Team = () => {
  return (
    <>
      <HeroDefault name="Our Team" />
      <div>
        <TeamDetails />

        <BannerAll mt="30" />
      </div>
    </>
  );
};

export default Team;
