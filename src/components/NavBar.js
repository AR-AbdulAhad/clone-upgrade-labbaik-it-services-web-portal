import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-[80px] py-[20px] flex justify-between items-center fixed top-0 left-0 bg-primary-color res-nav z-20">
      <div>
        <h2 className="font-extrabold text-[24px] tracking-[5px] text-orange-color"><a href='/'>LITS</a></h2>
      </div>
      <div className="res-menu-bar" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-[23px] text-dark-color font-semibold"></i>
      </div>
      <ul className="flex justify-center items-center gap-6 text-dark-color uppercase font-medium text-[15px] res-ul-desktop-nav">
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <a href='#home' title='Home'>Home</a>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <a href='#about' title='About'>About</a>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <Link to='/announcements' title='Announcements'>Announcements</Link>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <Link to='/result' title='Result'>Result</Link>
              </li>
          </ul>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="res-menu"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <ul className="flex justify-center items-center gap-6 text-dark-color uppercase font-medium text-[15px] res-ul-nav">
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <a href='#home' title='Home'>Home</a>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <a href='#about' title='About'>About</a>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <Link to='/announcements' title='Announcements'>Announcements</Link>
              </li>
              <li className="flex flex-col justify-center items-center leading-[2] dot-show-trans">
                  <div className="w-[5px] h-[5px] rounded-full bg-dark-color dot-hide-trans"></div>
                  <Link to='/result' title='Result'>Result</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="res-close-menu-bar"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fa-solid fa-xmark text-[33px] text-dark-color font-semibold"></i>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
