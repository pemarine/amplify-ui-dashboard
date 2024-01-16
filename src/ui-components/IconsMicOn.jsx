/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function IconsMicOn(props) {
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
      {...getOverrideProps(overrides, "IconsMicOn")}
      {...rest}
    >
      <View
        width="14px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="2px"
        left="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="14px"
          height="20px"
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
            width="14px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Icons / Mic / On")}
          >
            <Icon
              width="14px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 20 }}
              paths={[
                {
                  d: "M8 15.92L8 18L10.105 18C10.598 18 11 18.402 11 18.895L11 19.106C11 19.598 10.598 20 10.105 20L3.895 20C3.402 20 3 19.598 3 19.106L3 18.895C3 18.402 3.402 18 3.895 18L6 18L6 15.92C2.613 15.432 0 12.52 0 9C0 8.448 0.447 8 1 8C1.553 8 2 8.448 2 9C2 11.757 4.243 14 7 14C9.757 14 12 11.757 12 9C12 8.448 12.447 8 13 8C13.553 8 14 8.448 14 9C14 12.52 11.387 15.432 8 15.92ZM5 4C5 2.897 5.897 2 7 2C8.103 2 9 2.897 9 4L9 9C9 10.103 8.103 11 7 11C5.897 11 5 10.103 5 9L5 4ZM7 13C9.206 13 11 11.206 11 9L11 4C11 1.795 9.206 0 7 0C4.794 0 3 1.795 3 4L3 9C3 11.206 4.794 13 7 13Z",
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
