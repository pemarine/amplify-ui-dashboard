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
export declare type AgeGenderOverridesProps = {
    AgeGender?: PrimitiveOverrideProps<ViewProps>;
    "Age & Gender"?: PrimitiveOverrideProps<TextProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Income?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3233851"?: PrimitiveOverrideProps<IconProps>;
    Male?: PrimitiveOverrideProps<TextProps>;
    Expense?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3233854"?: PrimitiveOverrideProps<IconProps>;
    Female?: PrimitiveOverrideProps<TextProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    "18-24"?: PrimitiveOverrideProps<TextProps>;
    "25-34"?: PrimitiveOverrideProps<TextProps>;
    "35-44"?: PrimitiveOverrideProps<TextProps>;
    "45-64"?: PrimitiveOverrideProps<TextProps>;
    "65+"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 23"?: PrimitiveOverrideProps<FlexProps>;
    "3.3%"?: PrimitiveOverrideProps<TextProps>;
    "45%"?: PrimitiveOverrideProps<TextProps>;
    "34%"?: PrimitiveOverrideProps<TextProps>;
    "85%"?: PrimitiveOverrideProps<TextProps>;
    "28%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AgeGenderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AgeGenderOverridesProps | undefined | null;
}>;
export default function AgeGender(props: AgeGenderProps): React.ReactElement;
