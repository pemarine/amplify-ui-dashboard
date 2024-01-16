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
import ElementsCheckmark from "./ElementsCheckmark";
export default function Chart(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1424px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Chart")}
      {...rest}
    >
      <BGBG
        width="1424px"
        height="80px"
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
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
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
        top="calc(50% - 13px - 0px)"
        left="85.67%"
        right="11.59%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Text"
        {...getOverrideProps(overrides, "Time")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - 0px)"
        left="68.54%"
        right="28.72%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Text"
        {...getOverrideProps(overrides, "Date")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - 0px)"
        left="51.4%"
        right="45.86%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Text"
        {...getOverrideProps(overrides, "Saze")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - 0px)"
        left="34.27%"
        right="62.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Text"
        {...getOverrideProps(overrides, "Status")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 13px - 0px)"
        left="4.56%"
        right="87.85%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ralph Burke"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <ElementsCheckmark
        width="30px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="1.76%"
        right="96.14%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Elements / Checkmark")}
      ></ElementsCheckmark>
    </View>
  );
}
