/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsPieChart(props) {
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
          d: "M18.821 11.5448C18.298 11.3588 17.728 11.6318 17.545 12.1538C16.417 15.3438 13.384 17.4868 10 17.4868C5.589 17.4868 2 13.8988 2 9.4868C2 6.1028 4.143 3.0698 7.333 1.9418C7.854 1.7588 8.127 1.1878 7.943 0.666802C7.759 0.146802 7.188 -0.127198 6.667 0.0578016C2.679 1.4668 0 5.2558 0 9.4868C0 15.0008 4.486 19.4868 10 19.4868C14.231 19.4868 18.02 16.8088 19.43 12.8198C19.614 12.2998 19.342 11.7288 18.821 11.5448",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(0%, 2.14%)" },
        },
        {
          d: "M0 5.929L0 0C3.061 0.44 5.489 2.867 5.929 5.929L0 5.929Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(50%, 8.63%)" },
        },
        {
          d: "M1 0C0.448 0 0 0.447 0 1L0 9C0 9.553 0.448 10 1 10L9 10C9.552 10 10 9.553 10 9C10 4.037 5.962 0 1 0L1 0Z",
          fill: "rgba(35,31,32,1)",
          fillRule: "evenodd",
          style: { transform: "translate(41.67%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "IconsPieChart")}
      {...rest}
    ></Icon>
  );
}
