/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Boxerror(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="16px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Boxerror")}
      {...rest}
    >
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(255,60,95,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 5.4")}
      ></View>
      <Icon
        width="2px"
        height="10px"
        viewBox={{ minX: 0, minY: 0, width: 2, height: 10 }}
        paths={[
          {
            d: "M0 8L2 8L2 10L0 10L0 8ZM0 0L2 0L2 6L0 6L0 0Z",
            fill: "rgba(255,60,95,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.75%"
        bottom="18.75%"
        left="43.75%"
        right="43.75%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </View>
  );
}
