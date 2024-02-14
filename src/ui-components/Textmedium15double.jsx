/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textmedium15double(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="350px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textmedium15double")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="15px"
        fontWeight="500"
        color="rgba(50,60,71,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="226px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="35.43%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Deal title"
        {...getOverrideProps(overrides, "Deal title")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="15px"
        fontWeight="500"
        color="rgba(51,77,110,1)"
        lineHeight="22.5px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="100px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="71.43%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Amount"
        {...getOverrideProps(overrides, "Amount")}
      ></Text>
    </View>
  );
}
