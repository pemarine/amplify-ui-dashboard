import React, { useContext, useEffect, useState } from 'react';
import { Menu, MenuItem, MenuButton, Link } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaMoon, FaSun, FaExpand, FaCompress } from 'react-icons/fa';
import { baseConfig } from "../../config";

import { ThemeContext } from '../../themes/ThemeContext';

import { signOut } from 'aws-amplify/auth';


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
      {baseConfig.projectLink ? (
        <div className="github-link">
          <Link
            href={baseConfig.projectLink}
            isExternal={true}
            ariaLabel="github"
          >
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}
      
      <div className='toogle'>
        {theme === 'light' ? (
          <FaMoon onClick={toggleTheme} size={21} style={{ color: '#111936' }}/>
        ) : (
          <FaSun onClick={toggleTheme} size={21} style={{ color: 'white' }}/>
        )}
      </div>

      <div className='toogle'>
        <div className='toggle-fullscreen' onClick={toggleFullscreen}>
          {isFullscreen ? (
            <FaCompress size={21} style={{ color: theme === 'light' ? '#111936' : 'white' }} />
          ) : (
            <FaExpand size={21} style={{ color: theme === 'light' ? '#111936' : 'white' }} />
          )}
        </div>
      </div>

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <img alt="avatar" src={"https://i.pravatar.cc/150?img=3"}></img>
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
