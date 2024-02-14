/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function Avatarprofilephoto(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="46px"
      height="46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Avatarprofilephoto")}
      {...rest}
    >
      <Icon
        width="46px"
        height="46px"
        viewBox={{ minX: 0, minY: 0, width: 46, height: 46 }}
        paths={[
          {
            d: "M46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C35.7025 0 46 10.2975 46 23Z",
            fill: "rgba(229,229,229,1)",
            fillRule: "nonzero",
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
        {...getOverrideProps(overrides, "Ellipse")}
      ></Icon>
      <Image
        width="134.78%"
        height="102.17%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="-2.17%"
        left="-19.57%"
        right="-15.22%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
    </View>
  );
}
