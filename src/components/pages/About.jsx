import React from 'react';
import main from '../../assets/images/main.png'

const About = () => {
  return (
<div name='about' className='w-full p-10 lg:mt-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-zinc-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm <span className='text-blue-500 underline underline-offset-[5px] decoration-2'>Sudip Chakraborty</span>, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
