/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Boxcheckboxnumberselected(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="16px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Boxcheckboxnumberselected")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
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
        backgroundColor="rgba(16,156,241,1)"
        {...getOverrideProps(overrides, "unchecked")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="9px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="13.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="16px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2"
        {...getOverrideProps(overrides, "2")}
      ></Text>
    </View>
  );
}
