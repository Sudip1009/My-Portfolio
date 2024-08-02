import React from 'react';
import { Link } from 'react-router-dom';
import main from '../../assets/images/main.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Button from '../common/Button';

const Home = () => {
  return (
    <div className="container lg:flex lg:p-4 p-10 items-center gap-20">
      <div className="img">
        <img src={main} alt="image" />
      </div>
      <div className=' lg:w-1/3'>
        <h1 className="text-2xl md:text-3xl font-bold">I am a Frontend Developer</h1>
        <p className='mt-4'>
          Welcome to my portfolio!Passionate Frontend Developer crafting beautiful, user-friendly web experiences with modern technologies. Dedicated to performance, accessibility, and seamless interactions.
        </p>
        <a href="/resume.pdf" download={true}>
        <button className='text-white rounded-lg border-2 px-6 py-3 my-2 shadow-md shadow-blue-500/50 
       relative flex items-center hover:delay-300 before:absolute before:inset-0 before:bg-blue-500/50
       before:scale-x-0 before:origin-right before:transition-transform 
       hover:before:scale-x-100 hover:before:origin-left
        '>
         <span className='relative'>Resume</span>       
        </button>
        </a>
        <div className='lg:hidden flex space-x-1 mt-4'>
          <Link to="https://www.facebook.com/sudip.chakraborty.79656" className=' w-full'><FaFacebook size={30} className='bg-blue-600 p-1 rounded-full' /></Link>
          <Link to="mailto:chakraborty.sudip1009@gmail.com" className=' w-full'><CiMail size={30} className='bg-[#6bc7b3] p-1 rounded-full' /></Link>
          <Link to="https://github.com/Sudip1009" className=' w-full'><FaGithub size={30} className='bg-[#333333] p-1 rounded-full' /></Link>
          <Link to="/" className=' w-full'><FaLinkedin size={30} className='bg-blue-600 p-1 rounded-full' /></Link>
        </div>
      </div>
      <div>
        <div className="social space-y-2 hidden lg:flex flex-col fixed top-[35%] right-0">
          <div className='w-[160px] h-[60px] p-1 flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
            <Link to="https://www.facebook.com/sudip.chakraborty.79656" className='flex gap-7 items-center w-full text-gray-300'><FaFacebook size={30} />Facebook</Link>
          </div>
        </div>
        <div className="social space-y-2 hidden lg:flex flex-col fixed top-[45%] right-0">
          <div className='w-[160px] h-[60px] p-1 flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#6bc7b3]'>
            <Link to="mailto:chakraborty.sudip1009@gmail.com" className='flex gap-7 items-center w-full text-gray-300'><CiMail size={30} />Email</Link>
          </div>
        </div>
        <div className="social space-y-2 hidden lg:flex flex-col fixed top-[55%] right-0">
          <div className='w-[160px] h-[60px] p-1 flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#333333]'>
            <Link to="https://github.com/Sudip1009" className='flex gap-7 items-center w-full text-gray-300'><FaGithub size={30} />Github</Link>
          </div>
        </div>
        <div className="social space-y-2 hidden lg:flex flex-col fixed top-[65%] right-0">
          <div className='w-[160px] h-[60px] p-1 flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
            <Link to="" className='flex gap-7 items-center w-full text-gray-300'><FaLinkedin size={30} />Linkedin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
