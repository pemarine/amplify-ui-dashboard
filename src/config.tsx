import React from "react";
import { Icon } from "@aws-amplify/ui-react";

import {
  MdDashboard,
 // MdModeEditOutline,
  MdAccountBox,
 // MdOutlineTableChart,
} from "react-icons/md";

export const baseConfig = {
  projectLink: "/", // GitHub link in the navbar
  docsRepositoryBase: "", // base URL for the docs repository
  titleSuffix: "",
  search: true,
  header: true,
  headerText: "",
  footer: true,
  footerText: (
    <>
      <span>
        © {new Date().getFullYear()} eMarine Engineering Nordic AB, All Rights Reserved.
      </span>
    </>
  ),

  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/logo.svg"}
        alt="logo"

      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    icon: <Icon as={MdDashboard} />,
    title: "Dashboard",
    to: "/",
  },
  {
    eventKey: "dashboard2",
    icon: <Icon as={MdDashboard} />,
    title: "Dashboard2",
    to: "/dashboard2",
  },
  {
    eventKey: "fleet",
    icon: <Icon as={MdDashboard} />,
    title: "Fleet",
    to: "/fleet",
  },
/*
  {
    eventKey: "tables",
    icon: <Icon as={MdOutlineTableChart} />,
    title: "Tables",
    to: "/tables",
    children: [
      {
        eventKey: "basic-table",
        title: "Basic Table",
        to: "/tables",
      },
      {
        eventKey: "users",
        title: "Users Table",
        to: "/users-table",
      },
    ],
  },

  {
    eventKey: "forms",
    icon: <Icon as={MdModeEditOutline} />,
    title: "Forms",
    to: "/forms",
    children: [
      {
        eventKey: "form-basic",
        title: "Basic",
        to: "/forms",
      },
      {
        eventKey: "form-wizard",
        title: "Edit Form",
        to: "/edit-form",
      },
    ],
  },^
  */
  {
    eventKey: "profile",
    icon: <Icon as={MdAccountBox} />,
    title: "Profile",
    to: "/profile",
  },
];
