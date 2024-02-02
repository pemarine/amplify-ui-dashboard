import React, { useContext } from "react";
import { Flex, Text, Button } from "@aws-amplify/ui-react";
import { ThemeContext } from "../../themes/ThemeContext";
import "./Profile.css";

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
const ProfileInformation: React.FC<ProfileHeaderProps> = ({ _user }) => {
//const ProfileInformation = (props: ProfileHeaderProps) => {
  const { theme } = useContext(ThemeContext);


  return (
    <div 
      className={`profile-element ${theme}`}
    >
      <Text fontWeight="600" fontSize="18px" marginBottom="14px">
        Profile Information
      </Text>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Full Name:

        </Text>
        
        <Text variation="tertiary">{_user?._name}</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Company:
        </Text>
        <Text variation="tertiary"></Text>

      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Phone:
        </Text>
        <Text variation="tertiary">(44) 123 1234 123</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Email:
        </Text>
        <Text variation="tertiary">{_user?._email}</Text>
      </Flex>
    {/*  <Flex>
        <Text variation="tertiary" fontWeight="600">
          Location:
        </Text>
        <Text variation="tertiary">United States</Text> 
      </Flex>
      */}
      <div className="profile-card-edit">
        <Button marginLeft="auto">Edit</Button>
      </div>
    </div>
  );
};

export default ProfileInformation;
