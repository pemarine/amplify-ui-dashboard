/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsCrop(props) {
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
          d: "M0.556 8C0.25 8 0 7.751 0 7.444L0 0L7.445 0C7.751 0 8 0.249 8 0.556L8 8L0.556 8Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(25%, 25%)" },
        },
        {
          d: "M19 14L16 14L16 6.556C16 5.146 14.854 4 13.445 4L6 4L6 1C6 0.447 5.553 0 5 0C4.448 0 4 0.447 4 1L4 4L1 4C0.448 4 0 4.447 0 5C0 5.553 0.448 6 1 6L4 6L4 13.444C4 14.854 5.147 16 6.556 16L14 16L14 19C14 19.553 14.448 20 15 20C15.553 20 16 19.553 16 19L16 16L19 16C19.553 16 20 15.553 20 15C20 14.447 19.553 14 19 14L19 14Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsCrop")}
      {...rest}
    ></Icon>
  );
}
