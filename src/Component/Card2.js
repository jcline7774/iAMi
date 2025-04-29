import React from 'react';

function Card2(props) {
  const projectDet = props.details;

  return (
    <>
      {props.isPersonal ? (
        <div className="relative max-w-3xl w-full m-2 p-4 flex flex-col rounded-2xl shadow-md bg-slate-200 dark:bg-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out">
          <div className="text-lg w-full">
            {projectDet}
          </div>
        </div>
      ) : (
        <div className="group relative max-w-3xl w-full m-2 p-4 flex flex-col rounded-2xl shadow-md bg-slate-200 dark:bg-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out overflow-visible">

          {/* Big faded number */}
          <h2 className="absolute right-4 top-4 text-[8rem] text-black/10 pointer-events-none select-none leading-none transition-all duration-700 ease-in-out group-hover:text-black/50 group-hover:text-5xl group-hover:top-2">
            {props.pno}
          </h2>

          {/* Content section */}
          <div className="relative w-full flex flex-col items-start z-10 transition-all duration-700 ease-in-out overflow-visible p-2">
            <div className="text-base w-full">
              {projectDet}
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default Card2;
