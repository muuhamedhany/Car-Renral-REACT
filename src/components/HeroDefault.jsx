import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import bg from '../images/hero/bg.png';
import { Link } from 'react-router-dom';

const HeroDefault = (props) => {
  return (
    <div className="bg-[#ff510008] py-10">
      <div className="cont">
        <h1 className="Heading font-bold">{props.name}</h1>
        <div className="Heading2 flex gap-3 items-center">
          <Link to="/" className="font-semibold primary-text">
            Home{' '}
          </Link>
          <FaLongArrowAltRight />
          <span className="font-bold">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroDefault;
