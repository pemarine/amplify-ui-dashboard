/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Texteditdropdownplaceholderediting(props) {
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
      {...getOverrideProps(overrides, "Texteditdropdownplaceholderediting")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="11px"
        fontWeight="500"
        color="rgba(16,156,241,1)"
        lineHeight="16.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="302px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(50,60,71,1)"
        lineHeight="19.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="264px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="7px"
        left="0px"
        right="38px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Office meet-up"
        {...getOverrideProps(overrides, "Office meet-up")}
      ></Text>
      <Icon
        width="10px"
        height="6px"
        viewBox={{ minX: 0, minY: 0, width: 10, height: 6 }}
        paths={[
          {
            d: "M5 0L9.33013 4.5L0.669873 4.5L5 0Z",
            fill: "rgba(16,156,241,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        bottom="14px"
        right="4px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Polygon")}
      ></Icon>
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
        backgroundColor="rgba(129,142,155,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
    </View>
  );
}
