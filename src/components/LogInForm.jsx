import React from 'react';
import { Link } from 'react-router-dom';

const LogInForm = () => {
  return (
    <div className="cont ">
      <div className=" mt-25 mb-25 flex justify-center items-center  ">
        <div
          className="border border-[#b0ada958] Normal  flex flex-col
         rounded-[16px] bg-surface shadowPrim p-10 "
        >
          <div className="text-center Heading2 font-semibold pb-5">
            <h1>Log In</h1>
          </div>
          <form action="POSt" className="flex flex-col gap-4 w-full Paragraph">
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 ">
                <label htmlFor="Username">Username</label>
                <input
                  className="input-surface"
                  type="text"
                  id="Username"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password">Email</label>
              <input
                className="input-surface"
                type="password"
                id="password"
                placeholder="**********"
              />
            </div>

            <Link to="/" type="submit" className="text-center primary-btn">
              Log In
            </Link>
            <Link to="/SignUP" className="text-end primary-text underline">
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
