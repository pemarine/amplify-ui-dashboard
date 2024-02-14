/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import Textmedium18black from "./Textmedium18black";
export default function Texteditlargeplaceholdernew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="302px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Texteditlargeplaceholdernew")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="11px"
        fontWeight="500"
        color="rgba(129,142,155,1)"
        lineHeight="16.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="302px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        width="302px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="98.21%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(211,216,221,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Textmedium18black
        width="302px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37.5%"
        bottom="12.5%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "text/medium_18_black")}
      ></Textmedium18black>
    </View>
  );
}
