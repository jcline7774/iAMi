import React from 'react'

function Buttons({ text, onClick, width, height, bgColor, textColor, hoverBg, extraClass = "" }) {
  return (
      <button
          className={`rounded-md font-semibold transition duration-300 ${bgColor} ${textColor} ${hoverBg} ${extraClass}`}
          style={{ width, height }}
          onClick={onClick}
      >
          {text}
      </button>
  );
}

export default Buttons;
