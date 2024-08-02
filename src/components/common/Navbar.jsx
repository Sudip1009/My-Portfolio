import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleExperience = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const closeProjectsMenu = () => {
    setIsExperienceOpen(false);
    isOpen(false);
  };

//after:absolute content-[''] after:bg-pink-500 after:h-[3px] after:w-0 after:left-0 after:rounded-xl after:duration-300 hover:after:w-[100%]
  return (
    <div className="p-8 border-b-2 border-zinc-500 bg-transparent shadow-md shadow-blue-500/50 text-gray-400">
      <div className="container flex gap-20 justify-center items-center">
        <Link to="/">
        <div className="">
          <img src={logo} alt="logo" className='w-16' />
        </div>
        </Link>
        <div className="hidden md:flex text-xl space-x-6">
          <Link to="/" className="nav">Home</Link>
          <Link to="/about" className="nav">About</Link>
          <div className="relative">
            <button onClick={toggleExperience} className="nav flex items-center">
            Experience <IoIosArrowDropdown className="ml-1" />
            </button>
            {isExperienceOpen && (
              <div className="absolute top-10 left-0 w-40 bg-black shadow-md rounded-md dark:bg-gray-700">
                <Link to="/skills" className="nav block px-4 py-2 dark:text-gray-200  dark:hover:bg-gray-600" onClick={closeProjectsMenu}>Skills</Link>
                <Link to="/works" className="nav block px-4 py-2 dark:text-gray-200  dark:hover:bg-gray-600" onClick={closeProjectsMenu}>Works</Link>
              </div>
            )}
          </div> 
          <Link to="/contact" className="nav">Contact</Link>
        </div>
        <div className="md:hidden">
          <div onClick={toggleMenu} className="md:hidden z-10 cursor-pointer">
            {!isOpen ? <FaBars /> : <FaTimes />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-xl flex flex-col justify-center items-center space-y-2 mt-2 ">
          <Link to="/" className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500" onClick={toggleMenu}>About</Link>
          <div className="relative">
            <button onClick={toggleExperience} className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500 flex items-center">
              Experience <IoIosArrowDropdown className="ml-1" />
            </button>
            {isExperienceOpen && (
              <div className="absolute top-10 left-0 w-40 bg-white shadow-md rounded-md dark:bg-gray-700">
                <Link to="/skills" className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500 block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={closeProjectsMenu}>Skills</Link>
                <Link to="/works" className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500 block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600" onClick={closeProjectsMenu}>Works</Link>
              </div>
            )}
          </div> 
          <Link to="/contact" className="font-bold underline underline-offset-[5px] decoration-2 decoration-blue-500" onClick={toggleMenu}>Contact</Link>
        </div>
      )
    }
    </div>
  );
};

export default Navbar;

