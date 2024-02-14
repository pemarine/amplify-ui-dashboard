/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function Iconcontactnote(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="12px"
      height="12px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
      paths={[
        {
          d: "M10 3L7 0L1 0C0.45 0 0 0.45 0 1L0 7.005C0 7.555 0.45 8 1 8L9 7.995C9.55 7.995 10 7.55 10 7L10 3L10 3ZM6.5 0.75L9.25 3.5L6.5 3.5L6.5 0.75Z",
          fill: "rgba(51,77,110,1)",
          fillRule: "nonzero",
          style: { transform: "translate(83.33%, 91.67%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Iconcontactnote")}
      {...rest}
    ></Icon>
  );
}
