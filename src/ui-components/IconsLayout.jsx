/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsLayout(props) {
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
          d: "M5 9L0 9L0 0L6 0L6 8C6 8.552 5.551 9 5 9",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(41.67%, 29.17%)" },
        },
        {
          d: "M0 8L0 0L6 0L6 9L1 9C0.449 9 0 8.552 0 8",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 29.17%)" },
        },
        {
          d: "M1 0L13 0C13.551 0 14 0.448 14 1L14 3L0 3L0 1C0 0.448 0.449 0 1 0",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
        {
          d: "M15 0L3 0C1.346 0 0 1.346 0 3L0 5.818L0 6.182L0 15C0 16.654 1.346 18 3 18L15 18C16.654 18 18 16.654 18 15L18 6.182L18 5.818L18 3C18 1.346 16.654 0 15 0",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsLayout")}
      {...rest}
    ></Icon>
  );
}
