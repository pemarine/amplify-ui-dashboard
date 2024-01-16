/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsText(props) {
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
          d: "M17 0L1 0C0.447 0 0 0.447 0 1L0 4C0 4.553 0.447 5 1 5C1.553 5 2 4.553 2 4L2 2L8 2L8 15L6 15C5.447 15 5 15.447 5 16C5 16.553 5.447 17 6 17L12 17C12.553 17 13 16.553 13 16C13 15.447 12.553 15 12 15L10 15L10 2L16 2L16 4C16 4.553 16.447 5 17 5C17.553 5 18 4.553 18 4L18 1C18 0.447 17.553 0 17 0",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(12.5%, 16.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsText")}
      {...rest}
    ></Icon>
  );
}
