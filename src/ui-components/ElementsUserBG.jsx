/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BGBG from "./BGBG";
import IconsMoreHorizontal from "./IconsMoreHorizontal";
import { Text, View } from "@aws-amplify/ui-react";
import ElementsUserPhoto from "./ElementsUserPhoto";
export default function ElementsUserBG(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="448px"
      height="294px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsUserBG")}
      {...rest}
    >
      <BGBG
        width="448px"
        height="294px"
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
        {...getOverrideProps(overrides, "BG")}
      ></BGBG>
      <IconsMoreHorizontal
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        right="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icon")}
      ></IconsMoreHorizontal>
      <View
        width="223px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="20px"
        left="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "User")}
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
          top="calc(50% - 10px - -16px)"
          left="35.87%"
          right="41.26%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Bulgaria"
          {...getOverrideProps(overrides, "Countries")}
        ></Text>
        <Text
          fontFamily="DM Sans"
          fontSize="22px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="28.644001007080078px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 14.5px - 8.5px)"
          left="35.87%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Delia Jimenez"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <ElementsUserPhoto
          width="70px"
          height="70px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Photo")}
        ></ElementsUserPhoto>
      </View>
    </View>
  );
}
