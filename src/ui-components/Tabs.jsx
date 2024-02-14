/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Tabs(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Tabs2893175: {}, Tabs: {} },
      variantValues: { status: "On" },
    },
    {
      overrides: {
        Tabs2893175: { color: "rgba(255,255,255,1)" },
        Tabs: {
          padding: "15px 15px 15px 15px",
          border: "1px SOLID rgba(255,255,255,1)",
        },
      },
      variantValues: { status: "Off" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="154px"
      height="56px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Tabs")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(1,22,37,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tabs"
        {...getOverrideProps(overrides, "Tabs2893175")}
      ></Text>
    </Flex>
  );
}
