/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsTimer(props) {
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
          d: "M4 3L2 3L2 1C2 0.447 1.552 0 1 0C0.448 0 0 0.447 0 1L0 4C0 4.553 0.448 5 1 5L4 5C4.552 5 5 4.553 5 4C5 3.447 4.552 3 4 3",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(33.33%, 33.33%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsTimer")}
      {...rest}
    ></Icon>
  );
}
