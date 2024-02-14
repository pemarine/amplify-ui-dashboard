/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textmedium11gray(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="146px"
      height="17px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textmedium11gray")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="11px"
        fontWeight="500"
        color="rgba(112,118,131,1)"
        lineHeight="16.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="146px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="profile@email.com"
        {...getOverrideProps(overrides, "profile@email.com")}
      ></Text>
    </View>
  );
}
