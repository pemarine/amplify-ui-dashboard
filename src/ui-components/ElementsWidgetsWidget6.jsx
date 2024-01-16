/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BGBG from "./BGBG";
import ElementsInfo from "./ElementsInfo";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import IconsMoreHorizontal from "./IconsMoreHorizontal";
export default function ElementsWidgetsWidget6(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="326px"
      height="360px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsWidgetsWidget6")}
      {...rest}
    >
      <BGBG
        width="326px"
        height="360px"
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
      <ElementsInfo
        width="74px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="86.11%"
        bottom="8.33%"
        left="9.2%"
        right="68.1%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Elements / Info")}
      ></ElementsInfo>
      <View
        width="196px"
        height="196px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="19.17%"
        bottom="26.39%"
        left="19.94%"
        right="19.94%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <Icon
          width="196px"
          height="196px"
          viewBox={{ minX: 0, minY: 0, width: 196, height: 196 }}
          paths={[
            {
              d: "M98 196C152.124 196 196 152.124 196 98C196 43.8761 152.124 0 98 0C43.8761 0 0 43.8761 0 98C0 152.124 43.8761 196 98 196Z",
              fill: "rgba(226,251,215,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Color")}
        ></Icon>
        <Icon
          width="104.97px"
          height="104.56px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 104.97140502929688,
            height: 104.55501556396484,
          }}
          paths={[
            {
              d: "M7.09276 104.555C3.17554 104.555 0 101.375 0 97.4534C0 93.5314 3.17554 90.352 7.09276 90.352C53.1283 90.352 90.515 53.1264 90.7859 7.05964C90.8089 3.13769 94.0031 -0.0229664 97.9203 0.000125734C101.837 0.0232179 104.994 3.22131 104.971 7.14326C104.654 61.0202 60.9312 104.555 7.09276 104.555Z",
              fill: "rgba(52,181,58,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="53.34%"
          bottom="-6.69%"
          left="46.37%"
          right="0.07%"
          {...getOverrideProps(overrides, "Oval")}
        ></Icon>
        <Text
          fontFamily="DM Sans"
          fontSize="40px"
          fontWeight="500"
          color="rgba(52,181,58,1)"
          lineHeight="52.08000183105469px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 26px - 0px)"
          left="29.59%"
          right="29.08%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="25%"
          {...getOverrideProps(overrides, "25%")}
        ></Text>
      </View>
      <IconsMoreHorizontal
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9.17%"
        bottom="84.17%"
        left="83.44%"
        right="9.2%"
        padding="0px 0px 0px 0px"
        opacity="0.20000000298023224"
        {...getOverrideProps(overrides, "Icons / More / Horizontal")}
      ></IconsMoreHorizontal>
      <Text
        fontFamily="DM Sans"
        fontSize="22px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="28.644001007080078px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 14.5px - 135.5px)"
        left="9.2%"
        right="77.3%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Text"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
