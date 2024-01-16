/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsHome(props) {
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
          d: "M13.99 15.568L11 15.568L11 8.568C11 8.015 10.552 7.568 10 7.568L4 7.568C3.447 7.568 3 8.015 3 8.568L3 15.568L0 15.568L0.006 7.151L6.998 0L14 7.192L13.99 15.568Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(8.33%, 10.08%)" },
        },
        {
          d: "M0 6L4 6L4 0L0 0L0 6Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(29.17%, 49.95%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsHome")}
      {...rest}
    ></Icon>
  );
}
