/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textmedium12gray(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="82px"
      height="18px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textmedium12gray")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="12px"
        fontWeight="500"
        color="rgba(144,160,183,1)"
        lineHeight="18px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="82px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$ amount"
        {...getOverrideProps(overrides, "$ amount")}
      ></Text>
    </View>
  );
}
