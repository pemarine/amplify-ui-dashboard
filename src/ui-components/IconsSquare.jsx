/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsSquare(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M1 0C0.449 0 0 0.449 0 1L0 13C0 13.551 0.449 14 1 14L13 14C13.551 14 14 13.551 14 13L14 1C14 0.449 13.551 0 13 0L1 0Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
        {
          d: "M15 18L3 18C1.346 18 0 16.654 0 15L0 3C0 1.346 1.346 0 3 0L15 0C16.654 0 18 1.346 18 3L18 15C18 16.654 16.654 18 15 18L15 18Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsSquare")}
      {...rest}
    ></Icon>
  );
}
