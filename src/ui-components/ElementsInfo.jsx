/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ElementsInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="74px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsInfo")}
      {...rest}
    >
      <Icon
        width="14px"
        height="14px"
        viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
        paths={[
          {
            d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z",
            fill: "rgba(67,57,242,1)",
            fillRule: "evenodd",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3px"
        bottom="3px"
        left="0px"
        {...getOverrideProps(overrides, "Color")}
      ></Icon>
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
        top="calc(50% - 10px - 0px)"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Restless"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
