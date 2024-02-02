import React, { useContext } from "react";
import { Text, SwitchField } from "@aws-amplify/ui-react";
import { ThemeContext } from "../../themes/ThemeContext";
import "./Profile.css";


const ProfileSettings = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div 
      className={`profile-element ${theme}`}
    >
    <Text fontWeight="600" fontSize="18px" marginBottom="18px">
        Profile Settings
      </Text>

      <SwitchField
        isDisabled={false}
        label="Email me when someone follows me"
        labelPosition="end"
        defaultChecked={false}
      />

      <SwitchField
        isDisabled={false}
        label="Email me when someone mentions me"
        labelPosition="end"
        defaultChecked={true}
      />
      <SwitchField
        isDisabled={false}
        label="Item update notifications"
        labelPosition="end"
        defaultChecked={false}
      />
      <SwitchField
        isDisabled={false}
        label="Monthly product changes"
        labelPosition="end"
        defaultChecked={false}
      />

      <SwitchField
        isDisabled={false}
        label="Subscribe to newsletter"
        labelPosition="end"
        defaultChecked={true}
      />
    </div>
  );
};

export default ProfileSettings;
