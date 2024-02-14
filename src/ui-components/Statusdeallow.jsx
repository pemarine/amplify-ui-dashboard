/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Statusdeallow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="84px"
      height="22px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Statusdeallow")}
      {...rest}
    >
      <View
        width="84px"
        height="22px"
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
        backgroundColor="rgba(255,185,70,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="11px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="16.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.07px"
        width="68px"
        height="14px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.64%"
        bottom="22.73%"
        left="9.52%"
        right="9.52%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Low"
        {...getOverrideProps(overrides, "Low")}
      ></Text>
    </View>
  );
}
