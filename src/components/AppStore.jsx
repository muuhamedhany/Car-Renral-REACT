import React from 'react';
import appstore from '../images/download/appstore.svg';
import googleplay from '../images/download/googleapp.svg';

const AppStore = () => {
  return (
    <>
      <div className="bg-[#ff510008] download-section  py-20 ">
        <div className="cont">
          <div className=" md:w-150 flex flex-col gap-5">
            <h1 className="Heading font-bold leading-15">
              Download our app to get most out of it
            </h1>
            <p className="Paragraph text-[#8f8e8b]">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>

            <div className="flex md:flex-row flex-col gap-5">
              <img src={googleplay} className="w-50 cursor-pointer" />
              <img src={appstore} className="w-50 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
