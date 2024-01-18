import React, { useContext, useEffect, useState } from 'react';
import { Menu, MenuItem, MenuButton } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
//import { AiFillGithub } from "react-icons/ai";
import { FaMoon, FaSun, FaExpand, FaCompress } from 'react-icons/fa';
//import { baseConfig } from "../../config";

import { ThemeContext } from '../../themes/ThemeContext';

import { signOut } from 'aws-amplify/auth';

import logoIcon from '../../assets/images/logos/logo_icon.svg'; 


const HeaderNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
  
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const _signOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };



  const navigate = useNavigate();
  return (
    <>
      
      
      <div className='toogle'>
        {theme === 'light' ? (
          <FaMoon onClick={toggleTheme} size={23} style={{ color: '#111936' }}/>
        ) : (
          <FaSun onClick={toggleTheme} size={23} style={{ color: 'white' }}/>
        )}
      </div>

      <div className='toogle'>
        <div className='toggle-fullscreen' onClick={toggleFullscreen}>
          {isFullscreen ? (
            <FaCompress size={23} style={{ color: theme === 'light' ? '#111936' : 'white' }} />
          ) : (
            <FaExpand size={23} style={{ color: theme === 'light' ? '#111936' : 'white' }} />
          )}
        </div>
      </div>

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <img alt="avatar" src={logoIcon}></img>
            </div>
          </MenuButton>
        }
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={_signOut}>Logout</MenuItem>

      </Menu>
    </>
  );
};

export default HeaderNav;
