import React from 'react';
import MainCar from '../images/hero/main-car.png';
import HeroBg from '../images/hero/hero-bg.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  return (
    <>
      <div
        id="Hero"
        className="flex md:flex-row flex-col text-center
        md:text-start cont justify-center items-center mt-30"
      >
        <div className="flex flex-col gap-2 max-w-150">
          <h4 className="text-[1.5rem] font-semibold">Plan your trip now</h4>
          <h1 className="font-bold text-[3rem] md:text-[3.5rem] leading-15">
            Save <span className="text-[#ff4d31]">big</span> with our car rental
          </h1>
          <p className="text-[#8f8e8b] text-[1rem] md:text-[1.1rem] md:w-130">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-6">
            <a className="primary-btn" href="#Form">
              Book Ride
            </a>

            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hidden md:flex">
          <img
            src={HeroBg}
            className="absolute top-0 right-0 z-[-1] opacity-40"
          />

          <LazyLoadImage
            src={MainCar}
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: '500ms' },
            }}
            className="relative right-10"
            effect="blur"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
