import React from 'react'



const TechStack = ({title,icon}) => {
  return (
    <main>
         <section className="flex flex-wrap justify-center space-x-14 mt-10 ">
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={icon}
            alt="JavaScript Icon"
            className="w-20 h-20 m-2 p-5 bg-[#e0e0e0] rounded-lg"
          />
          <p className='text-[#142a36]'>{title}</p>
        </section>
      </section>
    </main>
  )
}

export default TechStack









/**
 * 
 *  <section className="flex flex-wrap justify-center space-x-14 mb-10 mt-10 ">
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={jsIcon}
            alt="JavaScript Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg"
          />
          <p>Javascript</p>
        </section>
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={reactIcon}
            alt="React Native Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg"
          />
          <p>React Js</p>
        </section>
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={mongoDBIcon}
            alt="MongoDB Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg"
          />
          <p>MongoDB</p>
        </section>
      </section>

      <section className="flex flex-wrap justify-center space-x-14">
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={nodeJsIcon}
            alt="Node.js Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg"
          />
          <p>Node Js</p>
        </section>
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={expressIcon}
            alt="Express.js Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg "
          />
          <p>Express Js</p>
        </section>
       
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={reduxIcon}
            alt="Redux Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg"
          />
          <p>Redux </p>
        </section>
        <section className="flex flex-col items-center text-white font-semibold">
          <img
            src={tailwindIcon}
            alt="Tailwind CSS Icon"
            className="w-20 h-20 m-2 p-5 bg-[#f7f7f7] rounded-lg "
          />
          <p>Tailwind</p>
        </section>
      </section>
 * 
 */