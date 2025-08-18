import React, { useState } from 'react';
import audi from '../images/models/audi.png';
import golf6 from '../images/models/golf6.png';
import camry from '../images/models/toyota.png';
import bmw from '../images/models/bmw.png';
import benz from '../images/models/benz.png';
import passat from '../images/models/passat.png';
import cars from '../data/cars.json';

const imageByKey = {
  audi,
  golf6,
  camry,
  bmw,
  benz,
  passat,
};

const MODELS = cars.map((car) => ({
  ...car,
  img: imageByKey[car.imgKey],
}));

const HomeModels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = MODELS[activeIndex];

  return (
    <>
      <div className="cont mt-50">
        <div className="text-center flex flex-col justify-center items-center">
          <h4 className="Normal font-semibold">Vehicle Models</h4>
          <h1 className="font-bold Heading">Our rental fleet</h1>
          <p className="md:w-150 text-[#8f8e8b]">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row 
            justify-between gap-[1rem] mt-5"
        >
          {/* Left – models list */}
          <div
            className="flex flex-col justify-center text-[1.1rem] gap-5
            md:w-80"
          >
            {MODELS.map((m, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={m.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`${
                    isActive ? 'Active-btn' : 'Non-Active-btn'
                  } py-4 px-6 rounded-[8px] text-left font-semibold transition`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>

          {/* Middle – preview image */}
          <div className="flex-1 flex items-center justify-center ">
            <img
              src={active.img}
              alt={active.name}
              className="p-6 min-w-[400px] max-h-[300px] "
            />
          </div>

          {/* Right – price and specs */}
          <div className="flex flex-col text-center ">
            <div
              className="bg-[#ff4d30] rounded-tl-2xl rounded-tr-2xl
               border-2 border-[#ff4d30] flex gap-2 py-1 px-5 Normal 
               justify-start items-center text-[#fffaf6]"
            >
              <h1 className=" font-bold Heading2">${active.pricePerDay}</h1>
              <h2 className="">/ rent per day</h2>
            </div>

            <div
              className="mb-3 grid w-full border-t-0 border-2
             border-[#b0ada9] Paragraph"
            >
              {Object.entries(active.specs).map(([label, value], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 py-3 ${
                    i < Object.keys(active.specs).length - 1 ? 'border-b-2' : ''
                  } border-[#b0ada9]`}
                >
                  <h2 className="md:px-10 border-r-2 border-[#b0ada9]">{label}</h2>
                  <h2 className="px-10">{value}</h2>
                </div>
              ))}
            </div>

            <a className="primary-btn" href="#Form">
              RESERVE NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeModels;
