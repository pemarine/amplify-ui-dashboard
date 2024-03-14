import React from "react";
import { Icon } from "@aws-amplify/ui-react";
import { Title } from "./utils/TitleTag";



import {
  MdDashboard,
 // MdModeEditOutline,
  MdAccountBox,
  MdAnchor,
  MdMap,
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
      <span style={{ fontSize: '17px'}}>
        © {new Date().getFullYear()} eMarine Engineering Nordic AB, All Rights Reserved.
      </span>
    </>
  ),

  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/logo.svg"}
        alt="logo"
        style={{ width: '150px' }}

      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    icon: <Icon as={MdMap} />,
    title: <Title>Map</Title>,
    to: "/",
  },
  {
    eventKey: "dashboard",
    icon: <Icon as={MdDashboard} />,
    title: <Title>Dashboard</Title>,
    to: "/dashboard",
  },
  {
    eventKey: "fleet",
    icon: <Icon as={MdAnchor} />,
    title: <Title>Fleet</Title>,
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
    title: <Title>Profile</Title>,
    to: "/profile",
  },
];
