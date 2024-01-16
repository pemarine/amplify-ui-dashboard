/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsBriefcase(props) {
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
          d: "M3 9C3 9.551 2.551 10 2 10L0 10L0 0L2 0C2.551 0 3 0.449 3 1L3 9Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(54.17%, 16.67%)" },
        },
        {
          d: "M0 9L0 1C0 0.449 0.449 0 1 0L3 0L3 10L1 10C0.449 10 0 9.551 0 9L0 9Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsBriefcase")}
      {...rest}
    ></Icon>
  );
}
