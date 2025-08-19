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

const MobileLinks = [
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
  {
    id: 7,
    name: 'Log In',
    href: '/LogIn',
  },
  {
    id: 8,
    name: 'Sign Up',
    href: '/SignUp',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileLinks() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-surface  p-2 md:pt-2 pt-5 w-full ">
        <div className=" cont  w-full ">
          <div className="flex  items-center justify-between h-16">
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
              <Link to="/LogIn" className="primary-text">
                log In
              </Link>
              <Link to="/SignUp" className="primary-btn-nav">
                Sign Up
              </Link>
            </div>

            {/* Mobile navbar */}
            <div
              className="primary-text Heading md:hidden"
              onClick={handleMobileLinks}
            >
              {isOpen ? <CgClose /> : <HiMiniBars3BottomRight />}
            </div>
          </div>
          <div
            className={`${isOpen ? 'flex ' : 'hidden'}  md:hidden
               flex-col text-start gap-7 Normal
               bg-surface my-3 font-semibold p-5 `}
          >
            {MobileLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className="primary-text border-b-1"
                  onClick={handleMobileLinks}
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
