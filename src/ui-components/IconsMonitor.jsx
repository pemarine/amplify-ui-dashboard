/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsMonitor(props) {
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
          d: "M16 9C16 9.551 15.552 10 15 10L8.087 10L7.913 10L1 10C0.448 10 0 9.551 0 9L0 1C0 0.449 0.448 0 1 0L15 0C15.552 0 16 0.449 16 1L16 9Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
        {
          d: "M17 0L3 0C1.346 0 0 1.346 0 3L0 11C0 12.654 1.346 14 3 14L9 14L9 16L5 16C4.45 16 4 16.45 4 17C4 17.55 4.45 18 5 18L15 18C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16L11 16L11 14L17 14C18.654 14 20 12.654 20 11L20 3C20 1.346 18.654 0 17 0L17 0Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsMonitor")}
      {...rest}
    ></Icon>
  );
}
