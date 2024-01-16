/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsCornerLeftDown(props) {
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
          d: "M13 0L8.00006 0C6.34608 0 5.0001 1.346 5.0001 3L5.0001 11.919L1.62513 9.219C1.19414 8.875 0.563144 8.944 0.219148 9.375C-0.125849 9.807 -0.0558495 10.436 0.375146 10.781L5.37509 14.781C5.55809 14.927 5.77909 15 6.00009 15C6.22108 15 6.44208 14.927 6.62508 14.781L11.625 10.781C12.056 10.436 12.126 9.807 11.781 9.375C11.437 8.944 10.807 8.874 10.375 9.219L7.00007 11.919L7.00007 3C7.00007 2.449 7.44907 2 8.00006 2L13 2C13.552 2 14 1.552 14 1C14 0.448 13.552 0 13 0",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(20.83%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsCornerLeftDown")}
      {...rest}
    ></Icon>
  );
}
