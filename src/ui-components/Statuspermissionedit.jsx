/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Statuspermissionedit(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="120px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Statuspermissionedit")}
      {...rest}
    >
      <View
        width="120px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,185,70,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="39px"
        height="17px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="21.43%"
        bottom="17.86%"
        left="34.17%"
        right="33.33%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="11px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="16.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="46.15%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Edit"
          {...getOverrideProps(overrides, "Edit")}
        ></Text>
        <Icon
          width="8px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 8, height: 5 }}
          paths={[
            {
              d: "M0.94 0L4 3.09042L7.06 0L8 0.951417L4 5L0 0.951417L0.94 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="41.18%"
          bottom="29.41%"
          left="79.49%"
          right="0%"
          {...getOverrideProps(overrides, "arrow_down")}
        ></Icon>
      </View>
    </View>
  );
}
