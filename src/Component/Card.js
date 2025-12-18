import React from 'react';

function Card({ pno, details, preview, isPersonal }) {
  return (
    <>
      {isPersonal ? (
        <div className="relative rounded-xl shadow-md bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-gray-100 p-4 mb-6 w-full max-w-2xl transition-all duration-500">
          <div className="text-base md:text-lg">{details}</div>
        </div>
      ) : (
        <div className="relative group overflow-hidden rounded-xl shadow-md bg-slate-100 dark:bg-gray-700 text-slate-800 dark:text-gray-100 p-4 mb-6 w-full max-w-2xl transition-all duration-500 hover:max-h-[1000px]">
          <div className="relative z-10 text-base md:text-lg">{details}</div>
          <h2 className="absolute top-[-1rem] right-4 text-[8rem] text-black/10 group-hover:text-black/40 transition-all duration-700 pointer-events-none z-0">
            {pno}
          </h2>
          
        </div>
      )}
    </>
  );
}

export default Card;
