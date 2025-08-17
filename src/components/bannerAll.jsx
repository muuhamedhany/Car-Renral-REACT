import React from 'react';

const BannerAll = (props) => {
  return (
    <div className={`w-full mt-${props.mt} pt-15 pb-15 bg-surface-invert bgBnr`}>
      <div
        className="cont flex justify-center md:gap-5
        gap-3 flex-col md:flex-row
        Heading2 font-bold text-center "
      >
        <h1 className="">Book a car by getting in touch with us </h1>
        <span className="secondary-text block">(123) 456-7869</span>
      </div>
    </div>
  );
};

export default BannerAll;
