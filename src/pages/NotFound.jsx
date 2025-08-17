import React from 'react';
import HeroDefault from '../components/HeroDefault';
import BannerAll from '../components/bannerAll';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='Heading font-bold gap-5 flex flex-col justify-center my-50 items-center cont'>

        <h1>404 <span className='font-semibold'>Not Found!</span> </h1>
        <Link to='/' className='primary-btn'>Home Page</Link>
      </div>

      
    </>
  );
};

export default NotFound;
