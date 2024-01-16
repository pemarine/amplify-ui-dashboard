/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsCornerUpLeft(props) {
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
          d: "M12 5.00004L3.081 5.00004L5.781 1.62504C6.126 1.19304 6.056 0.564044 5.625 0.219044C5.194 -0.124956 4.564 -0.0569561 4.219 0.375044L0.219 5.37504C-0.073 5.74104 -0.073 6.25904 0.219 6.62504L4.219 11.625C4.417 11.872 4.707 12 5 12C5.22 12 5.44 11.928 5.625 11.781C6.056 11.436 6.126 10.807 5.781 10.375L3.081 7.00004L12 7.00004C12.551 7.00004 13 7.44904 13 8.00004L13 13C13 13.552 13.448 14 14 14C14.552 14 15 13.552 15 13L15 8.00004C15 6.34604 13.654 5.00004 12 5.00004",
          fill: "rgba(0,0,0,1)",
          fillRule: "evenodd",
          style: { transform: "translate(16.67%, 20.83%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsCornerUpLeft")}
      {...rest}
    ></Icon>
  );
}
