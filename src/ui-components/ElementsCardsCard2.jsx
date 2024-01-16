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
import ElementsTags from "./ElementsTags";
export default function ElementsCardsCard2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="326px"
      height="210px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsCardsCard2")}
      {...rest}
    >
      <BGBG
        width="326px"
        height="210px"
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
      <Text
        fontFamily="DM Sans"
        fontSize="14px"
        fontWeight="400"
        color="rgba(67,57,242,1)"
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
        bottom="30px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Detalies"
        {...getOverrideProps(overrides, "Detalies")}
      ></Text>
      <View
        width="280px"
        height="71px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="69px"
        left="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group 3")}
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
          width="280px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 20px - -15.5px)"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="When you enter into any new area of science, you almost always find."
          {...getOverrideProps(overrides, "Text")}
        ></Text>
        <Text
          fontFamily="DM Sans"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="26.040000915527344px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="173px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 13px - 22.5px)"
          left="0%"
          right="38.21%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Type something"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="170px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30px"
        left="20px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <ElementsTags
          width="40px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / Tags02273")}
        ></ElementsTags>
        <ElementsTags
          width="60px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="50px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / Tags02274")}
        ></ElementsTags>
        <ElementsTags
          width="50px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="120px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / Tags02275")}
        ></ElementsTags>
      </View>
    </View>
  );
}
