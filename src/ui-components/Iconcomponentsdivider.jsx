/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
export default function Iconcomponentsdivider(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="32px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Iconcomponentsdivider")}
      {...rest}
    >
      <View
        width="32px"
        height="2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(194,207,224,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
    </View>
  );
}
