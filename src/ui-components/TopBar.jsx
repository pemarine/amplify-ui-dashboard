/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TopBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="332px"
      direction="row"
      width="1188px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(241,241,244,1)"
      padding="19px 35px 19px 35px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopBar")}
      {...rest}
    >
      <Flex
        gap="14px"
        direction="row"
        width="432px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="12px 20px 12px 20px"
        backgroundColor="rgba(241,241,244,1)"
        {...getOverrideProps(overrides, "Search Field")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MagnifyingGlass")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(139,139,167,1)"
          lineHeight="19.600000381469727px"
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
          children="Search for file, folder, etc..."
          {...getOverrideProps(overrides, "Search for file, folder, etc...")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Question")}
        ></View>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Gear")}
        ></View>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Bell")}
        ></View>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "User")}
        >
          <View
            width="44px"
            height="44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            borderRadius="40px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Profile Picture")}
          ></View>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Name")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(22,22,29,1)"
              lineHeight="22.399999618530273px"
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
              children="Wade Warren"
              {...getOverrideProps(overrides, "Wade Warren")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(110,110,145,1)"
              lineHeight="16.799999237060547px"
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
              children="wade.warren@mail.com"
              {...getOverrideProps(overrides, "wade.warren@mail.com")}
            ></Text>
          </Flex>
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "CaretDown")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
