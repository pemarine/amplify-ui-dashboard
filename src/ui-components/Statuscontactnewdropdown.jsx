/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Statuscontactnewdropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="84px"
      height="22px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Statuscontactnewdropdown")}
      {...rest}
    >
      <View
        width="84px"
        height="22px"
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
        backgroundColor="rgba(46,212,122,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
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
        top="40.91%"
        bottom="36.36%"
        left="66.67%"
        right="23.81%"
        {...getOverrideProps(overrides, "arrow_down")}
      ></Icon>
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
        letterSpacing="0.07px"
        width="26px"
        height="14px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.64%"
        bottom="22.73%"
        left="23.81%"
        right="45.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="New"
        {...getOverrideProps(overrides, "New")}
      ></Text>
    </View>
  );
}
