import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Amplify } from 'aws-amplify';
//catorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

//import config from './amplifyconfiguration.json';
import awsconfig from './aws-exports.js';
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
//import { ThemeProvider } from "@aws-amplify/ui-react";
import { ThemeProvider } from './themes/ThemeProvider';

//import theme from "./theme";


import Layout from "./components/Layout";
import Map from "./pages/map";
import Dashboard from "./pages/dashboard";
import Fleet from "./pages/fleet";
import Profile from "./pages/profile";
import Tables from "./pages/tables";
import UsersTable from "./pages/tables/UsersTablePage";
import Forms from "./pages/forms";
import EditForm from "./pages/forms/EditForm";
import VesselPage from "./pages/vessel";

import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";


import "@aws-amplify/ui-react/styles.css";

import { ExpandContext } from './utils/ExpandContext';
import { SortProvider } from './utils/SortContext'; // Import SortProvider

//import { studioTheme } from "./ui-components";

/*Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://kdssxysvlvcafmbvdft36yfwoi.appsync-api.eu-north-1.amazonaws.com/graphql',
      region: 'eu-north-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-xp42b*********************'
    }
  }
});
*/
//import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
//Amplify.configure(config);




export function App() {
  const [expand, setExpand] = useState(false);

  return (
    <SortProvider> {/* Add this */}
    <ExpandContext.Provider value={{ expand, setExpand }}>

    <ThemeProvider>
      <div>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Map />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="forms" element={<Forms />} />
            <Route path="edit-form" element={<EditForm />} />
            <Route path="tables" element={<Tables />} />
            <Route path="users-table" element={<UsersTable />} />
            <Route path="profile" element={<Profile />} />
            <Route path="vessel/:id" element={<VesselPage />} />


            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
    </ExpandContext.Provider>
    </SortProvider>
  );
}

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
     
    },
    Footer
  }
});

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
