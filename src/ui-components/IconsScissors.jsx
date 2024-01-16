/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function IconsScissors(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "IconsScissors")}
      {...rest}
    >
      <View
        width="17px"
        height="18px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="3px"
        left="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="17px"
          height="18px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Symbols")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="17px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Icons / Scissors")}
          >
            <Icon
              width="17px"
              height="18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.00025177001953,
                height: 18,
              }}
              paths={[
                {
                  d: "M16.707 15.293C17.098 15.684 17.098 16.316 16.707 16.707C16.512 16.902 16.256 17 16 17C15.744 17 15.488 16.902 15.293 16.707L10.293 11.707C9.902 11.316 9.902 10.684 10.293 10.293C10.684 9.902 11.316 9.902 11.707 10.293L16.707 15.293ZM3 16C2.448 16 2 15.551 2 15C2 14.449 2.448 14 3 14C3.552 14 4 14.449 4 15C4 15.551 3.552 16 3 16ZM3 4C2.448 4 2 3.551 2 3C2 2.449 2.448 2 3 2C3.552 2 4 2.449 4 3C4 3.551 3.552 4 3 4ZM16.708 2.706C17.099 2.314 17.097 1.682 16.706 1.292C16.314 0.902 15.682 0.904 15.292 1.294L9.012 7.597L5.707 4.293C5.704 4.291 5.701 4.29 5.698 4.287C5.886 3.896 6 3.462 6 3C6 1.346 4.654 0 3 0C1.346 0 0 1.346 0 3C0 4.654 1.346 6 3 6C3.463 6 3.895 5.886 4.287 5.698C4.29 5.701 4.29 5.705 4.293 5.707L7.6 9.014L4.311 12.314C3.913 12.12 3.473 12 3 12C1.346 12 0 13.346 0 15C0 16.654 1.346 18 3 18C4.654 18 6 16.654 6 15C6 14.549 5.893 14.125 5.714 13.74L16.708 2.706Z",
                  fill: "rgba(0,0,0,1)",
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
          </View>
        </View>
      </View>
    </View>
  );
}
