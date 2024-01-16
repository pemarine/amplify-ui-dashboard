/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsMinusCircle(props) {
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
          d: "M7 0L1 0C0.45 0 0 0.45 0 1C0 1.55 0.45 2 1 2L7 2C7.55 2 8 1.55 8 1C8 0.45 7.55 0 7 0",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(25%, 37.5%)" },
        },
        {
          d: "M8 16C3.589 16 0 12.411 0 8C0 3.589 3.589 0 8 0C12.411 0 16 3.589 16 8C16 12.411 12.411 16 8 16",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 8.33%)" },
        },
        {
          d: "M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsMinusCircle")}
      {...rest}
    ></Icon>
  );
}
