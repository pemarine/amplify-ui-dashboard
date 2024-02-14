/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Avatarprofilephoto from "./Avatarprofilephoto";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Avatarprofilephotoactive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Avatarprofilephotoactive")}
      {...rest}
    >
      <Avatarprofilephoto
        width="46px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.08%"
        bottom="2.08%"
        left="2.08%"
        right="2.08%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "avatar/profile_photo")}
      ></Avatarprofilephoto>
      <Icon
        width="48px"
        height="48px"
        viewBox={{ minX: 0, minY: 0, width: 48, height: 48 }}
        paths={[
          {
            d: "M46 24C46 36.1503 36.1503 46 24 46L24 50C38.3594 50 50 38.3594 50 24L46 24ZM24 46C11.8497 46 2 36.1503 2 24L-2 24C-2 38.3594 9.6406 50 24 50L24 46ZM2 24C2 11.8497 11.8497 2 24 2L24 -2C9.6406 -2 -2 9.6406 -2 24L2 24ZM24 2C36.1503 2 46 11.8497 46 24L50 24C50 9.6406 38.3594 -2 24 -2L24 2Z",
            stroke: "rgba(16,156,241,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "active_profile")}
      ></Icon>
    </View>
  );
}
