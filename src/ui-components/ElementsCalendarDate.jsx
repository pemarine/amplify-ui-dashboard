/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ElementsCalendarDate(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="203px"
      height="145px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsCalendarDate")}
      {...rest}
    >
      <View
        width="203px"
        height="145px"
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
        backgroundColor="rgba(218,215,254,1)"
        {...getOverrideProps(overrides, "BG")}
      ></View>
      <Icon
        width="203px"
        height="145px"
        viewBox={{ minX: 0, minY: 0, width: 203, height: 145 }}
        paths={[
          {
            d: "M203 0L202 0L202 144L0 144L0 145L202 145L203 145L203 144L203 0Z",
            fill: "rgba(0,0,0,0.1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Line")}
      >
        <View
          width="1px"
          height="145px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="99.51%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          opacity="0.10000000149011612"
          {...getOverrideProps(overrides, "Rectangle02187")}
        ></View>
        <View
          width="1px"
          height="203px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="99.31%"
          bottom="-139.31%"
          left="100%"
          right="-0.49%"
          transformOrigin="top left"
          transform="rotate(90deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          opacity="0.10000000149011612"
          {...getOverrideProps(overrides, "Rectangle02188")}
        ></View>
      </Icon>
      <Text
        fontFamily="DM Sans"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="26.040000915527344px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - 40.5px)"
        left="81.77%"
        right="14.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
    </View>
  );
}
