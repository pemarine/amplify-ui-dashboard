/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import BGBG from "./BGBG";
import ElementsUserPhoto from "./ElementsUserPhoto";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function ElementsCardsCard1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="326px"
      height="370px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ElementsCardsCard1")}
      {...rest}
    >
      <BGBG
        width="326px"
        height="370px"
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
      <View
        padding="0px 0px 0px 0px"
        width="132px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="310px"
        left="20px"
        {...getOverrideProps(overrides, "Users")}
      >
        <ElementsUserPhoto
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="92px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / User01858")}
        ></ElementsUserPhoto>
        <ElementsUserPhoto
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="46px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / User01859")}
        ></ElementsUserPhoto>
        <ElementsUserPhoto
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Elements / User01860")}
        ></ElementsUserPhoto>
      </View>
      <View
        width="326px"
        height="275px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="269px"
          height="95px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 47.5px - -90px)"
          left="20px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Group")}
        >
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
            width="269px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="36.84%"
            bottom="0%"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust."
            {...getOverrideProps(overrides, "Text")}
          ></Text>
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
            top="calc(50% - 14.5px - 33px)"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Moon Gazing"
            {...getOverrideProps(overrides, "Title")}
          ></Text>
        </View>
        <Image
          width="calc(100% - 0px)"
          height="160px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          borderRadius="10px 10px 0px 0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Image")}
        ></Image>
      </View>
    </View>
  );
}
