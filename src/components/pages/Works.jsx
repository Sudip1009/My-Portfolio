import React from 'react'
import { data } from '../../data/data'

function Works() {

  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name='work' className='w-full p-10 text-white'>
      <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-zinc-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 gap-10">

          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg 
              flex justify-center text-center items-center mx-auto content-div hover:scale-110 duration-200"
            >
              {/* Hover effect for images */}
              <div className="w-full opacity-0 group-hover:opacity-100 rounded-lg hover:bg-black/70 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg  
                       bg-zinc-900 border-2 px-6 py-3 my-2 shadow-md
                       relative hover:delay-300 before:absolute before:inset-0 before:bg-blue-500/50
                       before:scale-x-0 before:origin-right before:transition-transform 
                       hover:before:scale-x-100 hover:before:origin-left before:rounded-lg
                       "
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  {/* <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
}

export default Works