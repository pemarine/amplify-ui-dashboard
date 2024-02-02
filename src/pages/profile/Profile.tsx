import React, { useContext } from "react";
import { View, Flex, useTheme } from "@aws-amplify/ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileInformation from "./ProfileInformation";
import ProfileSettings from "./ProfileSettings";
import "./Profile.css";



import { useEffect, useState } from 'react';

import { ThemeContext } from "../../themes/ThemeContext";
//import { getCurrentUser } from "@aws-amplify/auth";
import { fetchUserAttributes} from "@aws-amplify/auth";

type User = {
  _username: string;
  _userId: string;
  _email: string;
  _name: string;

};




const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { tokens } = useTheme();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUserAttributes();

        // ...

        setUser({
          ...userData,
          _username: userData.username ?? "",
          _userId: userData.userId ?? "",
          _email: userData.email ?? "",
          _name: userData.name ?? "",

        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
     
      <View
        className={`amplify-profile ${theme}`}
        maxWidth="100%"
        padding="0rem"
        minHeight="100vh"
        

      >
        <Flex
          direction={{ base: "column", large: "row" }}
          alignItems="flex-start"
          gap={tokens.space.medium}
          marginTop="15px"

          marginBottom="15px"
          
        >
          <View
            borderRadius="6px"
            width={{ base: "100%", large: "100%" }}
            padding="1rem"
            backgroundColor="var(--amplify-colors-white)"

          >
            <ProfileHeader _user={user} />
          </View>
        </Flex>

        <Flex
          direction={{ base: "column", large: "row" }}
          gap={tokens.space.medium}
          alignItems="flex-start"
        >
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "40%" }}
            padding={{ base: "1em", large: "1.5rem" }}
          >
            <ProfileInformation _user={user}/>
          </View>
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "40%" }}
            padding={{ base: "1em", large: "1.5rem" }}
          >
            <ProfileSettings />
          </View>
        </Flex>
      </View>
    </>
  );
};

export default Profile;
