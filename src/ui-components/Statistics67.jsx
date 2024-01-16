/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Oval from "./Oval";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Statistics67(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="126px"
      height="126px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Statistics67")}
      {...rest}
    >
      <View
        width="126px"
        height="126px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Sharts / Charts 1")}
      >
        <Oval
          width="126px"
          height="126px"
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
          {...getOverrideProps(overrides, "Elements / Oval")}
        ></Oval>
        <Icon
          width="108.13px"
          height="126px"
          viewBox={{ minX: 0, minY: 0, width: 108.12625885009766, height: 126 }}
          paths={[
            {
              d: "M45.2033 126C42.6851 126 40.6437 123.956 40.6437 121.435C40.6437 118.913 42.6851 116.87 45.2033 116.87C74.9183 116.87 99.007 92.7513 99.007 63C99.007 33.2487 74.9183 9.13043 45.2033 9.13043C31.0177 9.13043 17.7118 14.6449 7.73523 24.3395C5.92816 26.0955 3.04149 26.0522 1.28765 24.243C-0.466177 22.4337 -0.423022 19.5435 1.38404 17.7875C13.0456 6.45557 28.6223 0 45.2033 0C79.9547 0 108.126 28.2061 108.126 63C108.126 97.7939 79.9547 126 45.2033 126Z",
              fill: "rgba(52,181,58,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="100%"
          bottom="-100%"
          left="14.11%"
          right="0.07%"
          {...getOverrideProps(overrides, "Oval")}
        ></Icon>
        <Text
          fontFamily="DM Sans"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="26.040000915527344px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 13px - 0px)"
          left="34.92%"
          right="34.13%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="67%"
          {...getOverrideProps(overrides, "67%")}
        ></Text>
      </View>
    </View>
  );
}
