/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { View } from "@aws-amplify/ui-react";
import IconsCheckmarkCheckmark from "./IconsCheckmarkCheckmark";
export default function ElementsCheckmark(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="30px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsCheckmark")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="30px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Activ")}
      >
        <View
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(67,57,242,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
      </View>
      <IconsCheckmarkCheckmark
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10%"
        bottom="10%"
        left="10%"
        right="10%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Icons / Checkmark / Checkmark")}
      ></IconsCheckmarkCheckmark>
    </View>
  );
}
