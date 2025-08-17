import React from 'react';
import aboutImg from '../images/about/about-main.jpg';
import icon1 from '../images/about/icon1.png';
import icon2 from '../images/about/icon2.png';
import icon3 from '../images/about/icon3.png';

const AboutComp = () => {
  return (
    <div className="cont">
      <div className="mt-20 gap-25 flex md:flex-row flex-col justify-center items-center ">
        <img src={aboutImg} className="rounded-[16px] md:w-[400px] md:mt-10" />

        <div className=" flex flex-col gap-15 md:gap-10 justify-center items-center md:items-start">
          <div className="text-center flex flex-col gap-3 md:text-start md:w-120">
            <h1 className="Normal font-semibold">About Our Company</h1>
            <h1 className="Heading2 font-bold ">
              You start the engine and your adventure begins
            </h1>
            <p className="Paragraph text-[#8f8e8b]">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
          </div>

          <div className="grid grid-cols-2  md:grid-cols-3 gap-5">
            <div>
              <div>
                <img src={icon1} />
              </div>
              <div className="flex  gap-3">
                <h1 className="Heading font-bold">20</h1>
                <h1 className="flex justify-center flex-col">
                  Car<span>Types</span>
                </h1>
              </div>
            </div>

            <div>
              <div>
                <img src={icon2} />
              </div>
              <div className="flex  gap-3">
                <h1 className="Heading font-bold">85</h1>
                <h1 className="flex justify-center flex-col">
                  Rental<span>Outlets</span>
                </h1>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={icon3} />
              </div>
              <div className="flex  gap-3">
                <h1 className="Heading font-bold">75</h1>
                <h1 className="flex justify-center flex-col">
                  Repair<span>Shop</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
