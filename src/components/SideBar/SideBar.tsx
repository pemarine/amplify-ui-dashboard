import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./SideBar.css";
import { appNavs } from "../../config";
import SideBarNav from "./SidebarNav";
import SidebarNavToggle from "./SidebarNavToggle";
import { ThemeContext } from "../../themes/ThemeContext";


const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  const [expand, setExpand] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <>
      <div className="btn-sidebar-nav">
        <SidebarNavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </div>
      <div className={`sidebar ${theme} ` + (expand ? "visible" : "")}>
        <SideBarNav navs={appNavs} />
      </div>
    </>
  );
};

export default SideBar;
