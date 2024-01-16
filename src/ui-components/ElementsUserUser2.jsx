/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import ElementsUserPhoto from "./ElementsUserPhoto";
export default function ElementsUserUser2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="123px"
      height="44px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsUserUser2")}
      {...rest}
    >
      <Text
        fontFamily="DM Sans"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 10px - 10px)"
        left="52px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ray Frazier"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Text
        fontFamily="DM Sans"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 10px - -10px)"
        left="52px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Finland"
        {...getOverrideProps(overrides, "Sities")}
      ></Text>
      <ElementsUserPhoto
        width="44px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 22px - 0px)"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Elements / User / Photo")}
      ></ElementsUserPhoto>
    </View>
  );
}
