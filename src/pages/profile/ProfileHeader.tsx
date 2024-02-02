import React, { useContext } from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

import logoIcon from '../../assets/images/logos/logo_icon.svg'; 
import "./Profile.css";
import { ThemeContext } from "../../themes/ThemeContext";

type User = {
  _username: string;
  _userId: string;
  _email: string;
  _name: string;
 // signInDetails: string; // replace 'any' with the actual type of signInDetails
};

type ProfileHeaderProps = {
  _user: User | null;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ _user }) => {
  const { theme } = useContext(ThemeContext);
  console.log("HELLO" + _user?._username);
  return (
    <>
      <Flex
        className={`profile-element ${theme}`}
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-image">
          <img alt="avatar" src={logoIcon}></img>
        </div>
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            {_user?._name}
            
          </Text>
          <Text variation="tertiary">
            {_user?._email}
          </Text>
        </div>
      </Flex>
    </>
  );
};

export default ProfileHeader;
