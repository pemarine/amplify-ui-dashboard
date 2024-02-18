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
export declare type CustomerGrowthOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "50"?: PrimitiveOverrideProps<TextProps>;
    "100"?: PrimitiveOverrideProps<TextProps>;
    "150"?: PrimitiveOverrideProps<TextProps>;
    "179"?: PrimitiveOverrideProps<TextProps>;
    "200"?: PrimitiveOverrideProps<TextProps>;
    "250"?: PrimitiveOverrideProps<TextProps>;
    CustomerGrowth?: PrimitiveOverrideProps<ViewProps>;
    "Overall Sales"?: PrimitiveOverrideProps<TextProps>;
    Dropdown?: PrimitiveOverrideProps<FlexProps>;
    "Current Year"?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    Jan?: PrimitiveOverrideProps<TextProps>;
    Feb?: PrimitiveOverrideProps<TextProps>;
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
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Frame 29"?: PrimitiveOverrideProps<ViewProps>;
    Vector242832?: PrimitiveOverrideProps<IconProps>;
    Vector242833?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 51"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "Total Customer"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CustomerGrowthProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CustomerGrowthOverridesProps | undefined | null;
}>;
export default function CustomerGrowth(props: CustomerGrowthProps): React.ReactElement;
