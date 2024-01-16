/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationsOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "50"?: PrimitiveOverrideProps<TextProps>;
    "100"?: PrimitiveOverrideProps<TextProps>;
    "150"?: PrimitiveOverrideProps<TextProps>;
    "200"?: PrimitiveOverrideProps<TextProps>;
    "250"?: PrimitiveOverrideProps<TextProps>;
    Applications?: PrimitiveOverrideProps<ViewProps>;
    Applications234074?: PrimitiveOverrideProps<TextProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Income234116?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3234117"?: PrimitiveOverrideProps<IconProps>;
    Reject?: PrimitiveOverrideProps<TextProps>;
    Income234119?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3234120"?: PrimitiveOverrideProps<IconProps>;
    Pending?: PrimitiveOverrideProps<TextProps>;
    Expense?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3234123"?: PrimitiveOverrideProps<IconProps>;
    Approved?: PrimitiveOverrideProps<TextProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 11"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Mar?: PrimitiveOverrideProps<TextProps>;
    Apr?: PrimitiveOverrideProps<TextProps>;
    May?: PrimitiveOverrideProps<TextProps>;
    Jun?: PrimitiveOverrideProps<TextProps>;
    Jul?: PrimitiveOverrideProps<TextProps>;
    Aug?: PrimitiveOverrideProps<TextProps>;
    Sep?: PrimitiveOverrideProps<TextProps>;
    Oct?: PrimitiveOverrideProps<TextProps>;
    Nov?: PrimitiveOverrideProps<TextProps>;
    Dec?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 33"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 36"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 39"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 45"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 48"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 40"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 43"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 46"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 49"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 32"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 41"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 44"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 50"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ApplicationsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ApplicationsOverridesProps | undefined | null;
}>;
export default function Applications(props: ApplicationsProps): React.ReactElement;
