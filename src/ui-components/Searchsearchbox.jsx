/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import Iconothersearch from "./Iconothersearch";
export default function Searchsearchbox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="777px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Searchsearchbox")}
      {...rest}
    >
      <View
        width="777px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,248,250,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="139px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25%"
        bottom="25%"
        left="2.06%"
        right="80.05%"
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
          top="calc(50% - 9px - 0px)"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search colleague"
          {...getOverrideProps(overrides, "Search colleague")}
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
