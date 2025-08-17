import { useState } from 'react';
import logo from '../images/logo/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { CgClose } from 'react-icons/cg';

const links = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 2,
    name: 'About',
    href: '/About',
  },
  {
    id: 3,
    name: 'Vehicle Model',
    href: '/Models',
  },
  {
    id: 4,
    name: 'Testimonials',
    href: '/Testimonials',
  },
  {
    id: 5,
    name: 'Our Team',
    href: '/Team',
  },
  {
    id: 6,
    name: 'Contact',
    href: '/Contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileLinks() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="blur-background p-2 w-full">
        <div className=" cont  w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="max-w-[140px] theme-logo"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Desktop navbar */}
            <div className="hidden md:flex md:items-center md:justify-between">
              <div className="ml-10 flex items-baseline gap-7">
                {links.map((link) => {
                  return (
                    <NavLink
                      key={link.id}
                      to={link.href}
                      className="primary-text "
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-between gap-4">
              <a href="" className="primary-text">
                Sign In
              </a>
              <button className="primary-btn-nav">Register</button>
            </div>

            {/* Mobile navbar */}
            <div
              className="primary-text text-4xl md:hidden"
              onClick={handleMobileLinks}
            >
              {isOpen ? <CgClose /> : <HiMiniBars3BottomRight />}
            </div>
          </div>
          <div
            className={`${isOpen ? 'flex ' : 'hidden'} md:hidden
             mt-10 absolute flex-col  text-start gap-7 text-[1.2rem]
             bg-surface border border-[#b0ada958] py-10 pr-30 pl-10 rounded-2xl`}
          >
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className="primary-text border-b-1"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
