/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Texteditimageplaceholdernew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="302px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Texteditimageplaceholdernew")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(25,42,62,1)"
        lineHeight="19.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="252px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="7px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lindsey Stroud"
        {...getOverrideProps(overrides, "Lindsey Stroud")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43.75%"
        bottom="14.58%"
        left="0%"
        right="93.38%"
        {...getOverrideProps(overrides, "associated_photo")}
      >
        <Icon
          width="20px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
          paths={[
            {
              d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
              fill: "rgba(196,196,196,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse")}
        ></Icon>
        <Image
          width="50px"
          height="74.17px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="-39.17px"
          left="-15.83px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </View>
      <View
        width="302px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(211,216,221,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
    </View>
  );
}
