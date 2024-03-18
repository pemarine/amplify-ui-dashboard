import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./SideBar.css";
import { appNavs } from "../../config";
import SideBarNav from "./SidebarNav";
//import SidebarNavToggle from "./SidebarNavToggle";
import { ThemeContext } from "../../themes/ThemeContext";
import { ExpandContext } from '../../utils/ExpandContext';



const SideBar = () => {
  const { theme } = useContext(ThemeContext);
  const { expand, setExpand } = useContext(ExpandContext);

  let location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <>
      {/*}
      <div className="btn-sidebar-nav">
        <SidebarNavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </div>
  {*/}
      <div
  className={`sidebar ${theme} ` + (expand ? "visible" : "")}
  onMouseEnter={() => setExpand(true)} // Expand the sidebar when the mouse enters
  onMouseLeave={() => setExpand(false)} // Collapse the sidebar when the mouse leaves
>
  <SideBarNav navs={appNavs} />
</div>

    </>
  );
};

export default SideBar;
