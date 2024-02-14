/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import Iconothernotifications from "./Iconothernotifications";
import Iconothersearch from "./Iconothersearch";
export default function Searchsearchbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1184px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Searchsearchbar")}
      {...rest}
    >
      <View
        width="1184px"
        height="60px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "top_bar_bg")}
      ></View>
      <Iconothernotifications
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="18px"
        right="36px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icon/other/notifications")}
      ></Iconothernotifications>
      <View
        padding="0px 0px 0px 0px"
        width="137px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.33%"
        bottom="33.33%"
        left="3.04%"
        right="85.39%"
        {...getOverrideProps(overrides, "search")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="12px"
          fontWeight="400"
          color="rgba(144,160,183,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="1px"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search for a mail"
          {...getOverrideProps(overrides, "Search for a mail")}
        ></Text>
        <Iconothersearch
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "icon/other/search")}
        ></Iconothersearch>
      </View>
    </View>
  );
}
