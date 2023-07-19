import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Mechalogy is just a platform for learning;
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Welcome to MECHALOGY, your ultimate destination for maximizing opportunities in the field of mechanical engineering. We are dedicated to empowering individuals to achieve the highest levels of excellence in this dynamic discipline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href='/login'>Gat Start</Link> 

             <Link className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href='/login'>Beginning Data</Link> 
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
