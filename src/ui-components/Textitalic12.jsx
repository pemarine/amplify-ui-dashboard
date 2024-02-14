/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textitalic12(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="256px"
      height="18px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textitalic12")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="12px"
        fontWeight="400"
        color="rgba(213,213,213,1)"
        fontStyle="italic"
        lineHeight="18px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="256px"
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
        children="Nicci is typing a message..."
        {...getOverrideProps(overrides, "Nicci is typing a message...")}
      ></Text>
    </View>
  );
}
