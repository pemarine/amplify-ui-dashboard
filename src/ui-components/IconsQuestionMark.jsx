/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsQuestionMark(props) {
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
          d: "M10 5C10 2.243 7.757 0 5 0C2.243 0 0 2.243 0 5C0 5.553 0.447 6 1 6C1.553 6 2 5.553 2 5C2 3.346 3.346 2 5 2C6.654 2 8 3.346 8 5C8 6.654 6.654 8 5 8C4.447 8 4 8.447 4 9L4 11C4 11.553 4.447 12 5 12C5.553 12 6 11.553 6 11L6 9.898C8.279 9.435 10 7.414 10 5",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M1 0C0.447 0 0 0.447 0 1C0 1.553 0.447 2 1 2C1.553 2 2 1.553 2 1C2 0.447 1.553 0 1 0",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(16.67%, 58.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsQuestionMark")}
      {...rest}
    ></Icon>
  );
}
