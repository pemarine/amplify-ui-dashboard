/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Buttonaccentdisabled(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="160px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Buttonaccentdisabled")}
      {...rest}
    >
      <View
        width="160px"
        height="42px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(194,207,224,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="19.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="132px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.19%"
        bottom="26.19%"
        left="8.75%"
        right="8.75%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Accent button"
        {...getOverrideProps(overrides, "Accent button")}
      ></Text>
    </View>
  );
}
