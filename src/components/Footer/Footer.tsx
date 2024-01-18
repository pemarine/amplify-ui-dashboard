import React, { useContext } from "react";
import { baseConfig } from "../../config";
import "./Footer.css";

import { ThemeContext } from "../../themes/ThemeContext";


const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return <div className={`footer ${theme}`}>{baseConfig.footerText}</div>;
};

export default Footer;
