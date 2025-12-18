import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeAction } from '../store/theme-slice';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import ProfileImage from './ProfileImage';
import '../Styles/NavBar.css';

function NavBar(props) {
  const isDark = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();


  const toggleTheme = () => {
    dispatch(themeAction.toggleDarkMode());
  };

  const hideMenu = () => {
    if (props.toggleMenu) props.toggleMenu();
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/education', label: 'Education' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="nav bg-slate-200 text-stone-800 dark:bg-gray-800 dark:text-white shadow-md w-[80vw] sm:w-[300px] min-h-screen flex flex-col items-center p-4 transition-colors duration-300">
      {/* Close button for mobile */}
      <div className="self-end mb-4 sm:hidden" onClick={hideMenu}>
        <Buttons text={<div className="menu-close-icon-mob" />} width="7vw" height="7vw" />
      </div>

      {/* Profile Image */}
      <ProfileImage />

      {/* Name + Title */}
      <div className="nav-name text-center mt-4">
        <div className="text-2xl font-bold text-terracotta dark:text-sea f3">John Cline</div>
        <div className="text-sm text-stone-600 dark:text-stone-300 f1">Full Stack Developer</div>
      </div>

      {/* Navigation Options */}
      <div className="nav-options-cont mt-8 flex dark:text-sea flex-col gap-4 w-full text-center font-medium">
        {links.map((link) => (
          <div key={link.to} className='div-option dark:bg-slate-700 dark:text-sea' onClick={hideMenu}>
            <Link to={link.to}>{link.label}</Link>
          </div>
        ))}
      </div>

      {/* Toggle Theme Button */}
      <div className="mt-10">
        <Buttons
          text={isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          onClick={toggleTheme}
          width="140px"
          height="40px"
          bgColor="bg-terracotta dark:bg-sea"
          textColor="text-white"
          hoverBg="hover:bg-[#e59472] dark:hover:bg-[#3a99c3]"
        />
      </div>
    </div>
  );
}

export default NavBar;
