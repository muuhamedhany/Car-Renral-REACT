import React from 'react';
import logo from '../images/logo/logo.png';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="bg-[#00000024] pt-15 pb-10">
        <div className="cont ">
          <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col justify-center items-start gap-3">
              <img src={logo} className="max-w-[140px] theme-logo" />
              <h1 className="flex flex-col">
                © 2025 Made By
                <a
                  target="blank"
                  className="secondary-text font-semibold"
                  href="https://github.com/muuhamedhany"
                >
                  muuhamedhany
                </a>
              </h1>
            </div>

            <div>
              <h1 className="font-bold Normal pb-3">ABOUT</h1>

              <div className="flex flex-col gap-2">
                <a href="/about" className="primary-text">
                  about us
                </a>
                <a href="/contact" className="primary-text">
                  contact us
                </a>
              </div>
            </div>

            <div>
              <h1 className="font-bold Normal pb-3">FOLLOW US</h1>

              <div className="flex flex-col gap-2">
                <a
                  target="blank"
                  href="https://github.com/muuhamedhany"
                  className="primary-text flex gap-2 items-center"
                >
                  <FaGithub /> Github
                </a>
                <a
                  target="blank"
                  href="https://www.instagram.com/muuhamedhany/"
                  className="primary-text flex gap-2 items-center"
                >
                  <AiFillInstagram /> Instagram
                </a>
              </div>
            </div>

            <div>
              <h1 className="font-bold Normal pb-3">LEGAL</h1>

              <div className="flex flex-col gap-2">
                <a className="primary-text">Privacy Policy</a>
                <a className="primary-text">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
