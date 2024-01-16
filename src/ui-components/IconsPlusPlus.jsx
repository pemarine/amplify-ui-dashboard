/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsPlusPlus(props) {
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
          d: "M15 7L9 7L9 1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1L7 7L1 7C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9L7 9L7 15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15L9 9L15 9C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsPlusPlus")}
      {...rest}
    ></Icon>
  );
}
