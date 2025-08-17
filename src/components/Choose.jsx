import React from 'react';
import cars from '../images/chooseUs/main.png';
import icon1 from '../images/chooseUs/icon1.png';
import icon2 from '../images/chooseUs/icon2.png';
import icon3 from '../images/chooseUs/icon3.png';

const Choose = () => {
  return (
    <div className="mt-30 mb-50 cont flex flex-col justify-center items-center">
      <div>
        <img src={cars} className='w-500' />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-100">
        <div className="md: md:text-start text-center">
          <h1 className="Normal font-semibold">Why Choose Us</h1>

          <h1 className="pb-5 pt-1  Heading font-bold leading-15">
            Best valued deals you will ever find
          </h1>

          <p className="Paragraph text-[#8f8e8b] mb-10 md:w-135">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>

          <a className="primary-btn" href="#Hero">
            Find Details
          </a>
        </div>

        <div className="flex flex-col gap-10 md:mt-0 mt-15">
          <div className="flex md:flex-row flex-col items-center md:text-start text-center  gap-5">
            <img src={icon1} />
            <div>
              <h1 className="text-[1.6rem] font-semibold pb-2">
                Cross Country Drive
              </h1>
              <p className="Paragraph text-[#8f8e8b] w-80">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center md:text-start text-center  gap-5">
            <img src={icon2} />
            <div>
              <h1 className="text-[1.6rem] font-semibold pb-2">
                All Inclusive Pricing
              </h1>
              <p className="Paragraph text-[#8f8e8b] w-80">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col items-center md:text-start text-center  gap-5">
            <img src={icon3} />
            <div>
              <h1 className="text-[1.6rem] font-semibold pb-2">
                No Hidden Charges
              </h1>
              <p className="Paragraph text-[#8f8e8b] w-80">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
