import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // ← NEW

function BodyCard({ header, skills, className }) {
  const [visibleBars, setVisibleBars] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleBars(prev => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full flex flex-col items-center p-4 ${className}`}>
      
      {/* Header */}
      <div className="text-xl font-bold text-center text-gray-700 dark:text-sea mb-6">
        {header.toUpperCase()}
      </div>

      {/* Skills List */}
      <ul className="w-full max-w-md space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            
            {/* Skill Name */}
            <div className="w-full text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1 text-center">
              {skill.name}
            </div>

            {/* Progress Bar */}
            <div
              className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-6 overflow-hidden relative"
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
            >
              {/* Animated Fill */}
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: visibleBars.includes(index) ? skill.level : 0,
                }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                style={{
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BodyCard;
