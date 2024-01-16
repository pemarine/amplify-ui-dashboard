/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function ElementsTags(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="80px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsTags")}
      {...rest}
    >
      <View
        width="80px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group")}
      >
        <View
          width="80px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="6px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(218,215,254,1)"
          {...getOverrideProps(overrides, "Color")}
        ></View>
        <Text
          fontFamily="DM Sans"
          fontSize="10px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 7.5px - -0.5px)"
          left="16.88%"
          right="16.88%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="UI Designer"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </View>
    </View>
  );
}
