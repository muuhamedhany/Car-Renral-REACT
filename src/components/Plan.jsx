import React from 'react';
import img1 from '../images/plan/icon1.png';
import img2 from '../images/plan/icon2.png';
import img3 from '../images/plan/icon3.png';

const Plan = () => {
  return (
    <>
      <div className="cont">
        <div
          className="mt-50 flex flex-col 
        justify-center items-center text-center"
        >
          <h4 className="Normal font-semibold">Plan your trip now</h4>
          <h1 className="font-bold Heading">Quick & easy car rental</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center md:gap-14 ">
            <div className="flex flex-col justify-center items-center gap-5 mt-15">
              <img src={img1} />
              <h4 className="Heading2 font-bold">Select Car</h4>
              <p className="text-[#b0ada9] Paragraph w-100 md:w-full">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 mt-15">
              <img src={img2} />
              <h4 className="Heading2 font-bold">Contact Operator</h4>
              <p className="text-[#b0ada9] Paragraph w-100 md:w-full">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 mt-15">
              <img src={img3} />
              <h4 className="Heading2 font-bold">Let's Drive</h4>
              <p className="text-[#b0ada9] Paragraph w-100 md:w-full">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
