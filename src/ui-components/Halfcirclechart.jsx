/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Halfcirclechart(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="137px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Halfcirclechart")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Completed Task"
        {...getOverrideProps(overrides, "Completed Task")}
      ></Text>
      <View
        width="177px"
        height="88.5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Graphic ")}
      >
        <Icon
          width="177px"
          height="177px"
          viewBox={{ minX: 0, minY: 0, width: 177, height: 177 }}
          paths={[
            {
              d: "M177 88.5C177 76.878 174.711 65.3698 170.263 54.6325C165.816 43.8952 159.297 34.139 151.079 25.921C142.861 17.7031 133.105 11.1842 122.367 6.73666C111.63 2.28912 100.122 -5.08013e-07 88.5 8.52651e-14C76.878 5.08013e-07 65.3698 2.28912 54.6325 6.73666C43.8952 11.1842 34.139 17.7031 25.921 25.9211C17.7031 34.139 11.1842 43.8952 6.73666 54.6325C2.28912 65.3698 -1.01603e-06 76.878 3.44169e-13 88.5L26.55 88.5C26.55 80.3646 28.1524 72.3089 31.2657 64.7928C34.3789 57.2766 38.9421 50.4473 44.6947 44.6947C50.4473 38.9421 57.2766 34.3789 64.7928 31.2657C72.3089 28.1524 80.3646 26.55 88.5 26.55C96.6354 26.55 104.691 28.1524 112.207 31.2657C119.723 34.3789 126.553 38.9421 132.305 44.6947C138.058 50.4473 142.621 57.2766 145.734 64.7928C148.848 72.3089 150.45 80.3646 150.45 88.5L177 88.5Z",
              fill: "rgba(54,67,78,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Half circle")}
        ></Icon>
        <Icon
          width="177px"
          height="177px"
          viewBox={{ minX: 0, minY: 0, width: 177, height: 177 }}
          paths={[
            {
              d: "M52.6276 7.59621C36.9638 14.5415 23.6529 25.8845 14.3109 40.2483C4.96884 54.6121 -0.00262424 71.379 1.03877e-06 88.5136L26.55 88.5095C26.5482 76.5153 30.0282 64.7785 36.5676 54.7238C43.107 44.6692 52.4247 36.729 63.3893 31.8673L52.6276 7.59621Z",
              fill: "rgba(255,96,96,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Progress")}
        ></Icon>
        <Icon
          width="177px"
          height="177px"
          viewBox={{ minX: 0, minY: 0, width: 177, height: 177 }}
          paths={[
            {
              d: "M44.1355 11.923C43.2955 12.4096 42.4636 12.9101 41.64 13.4241L55.698 35.9469C56.2745 35.587 56.8569 35.2367 57.4449 34.8961L44.1355 11.923Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Indicator")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="70px"
          left="61px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="25.71%"
          {...getOverrideProps(overrides, "25.71%")}
        ></Text>
      </View>
    </Flex>
  );
}
