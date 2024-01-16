/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function ElementsLineGorizontal(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="180px"
      height="8px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 180, height: 8 }}
      paths={[
        {
          d: "M0 4C0 1.79086 1.79086 0 4 0L176 0C178.209 0 180 1.79086 180 4L180 4C180 6.20914 178.209 8 176 8L4 8C1.79086 8 0 6.20914 0 4L0 4Z",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "ElementsLineGorizontal")}
      {...rest}
    ></Icon>
  );
}
