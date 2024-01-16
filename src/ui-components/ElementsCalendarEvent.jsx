/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BGBG from "./BGBG";
import { Text, View } from "@aws-amplify/ui-react";
export default function ElementsCalendarEvent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsCalendarEvent")}
      {...rest}
    >
      <BGBG
        width="200px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Elements / BG")}
      ></BGBG>
      <View
        width="157px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="14px"
        left="14px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Text
          fontFamily="DM Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(2,160,252,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="157px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="58.33%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Usually the astronomy."
          {...getOverrideProps(overrides, "Text")}
        ></Text>
        <Text
          fontFamily="DM Sans"
          fontSize="20px"
          fontWeight="400"
          color="rgba(2,160,252,1)"
          lineHeight="26.040000915527344px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 13px - 11px)"
          left="0%"
          right="71.97%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="11:00"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
