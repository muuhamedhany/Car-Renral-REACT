import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-surface-invert">
      <div className="cont mt-50  text-center ">
        <h1 className="Heading font-bold pt-15 pb-3">
          Save big with our cheap car rental!
        </h1>
        <p className="Normal  pb-15">
          Top Airports. Local Suppliers.{' '}
          <span className="font-semibold secondary-text">24/7</span> Support.
        </p>
      </div>
    </div>
  );
};

export default Banner;
