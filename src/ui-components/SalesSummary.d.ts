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
export declare type SalesSummaryOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    SalesSummary?: PrimitiveOverrideProps<ViewProps>;
    "Overall Sales"?: PrimitiveOverrideProps<TextProps>;
    Dropdown?: PrimitiveOverrideProps<FlexProps>;
    "21 Jan 2023 - 21 Jul 2023"?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
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
    "$40,000"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "$30,000"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "$20,000"?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "$10,000"?: PrimitiveOverrideProps<TextProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Income?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3272917"?: PrimitiveOverrideProps<IconProps>;
    Electronic?: PrimitiveOverrideProps<TextProps>;
    Expense272919?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3272920"?: PrimitiveOverrideProps<IconProps>;
    Furniture?: PrimitiveOverrideProps<TextProps>;
    Expense272922?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3272923"?: PrimitiveOverrideProps<IconProps>;
    Fashion?: PrimitiveOverrideProps<TextProps>;
    "Frame 29"?: PrimitiveOverrideProps<ViewProps>;
    Vector273048?: PrimitiveOverrideProps<IconProps>;
    Vector273049?: PrimitiveOverrideProps<IconProps>;
    Vector273040?: PrimitiveOverrideProps<IconProps>;
    Vector273041?: PrimitiveOverrideProps<IconProps>;
    Vector273031?: PrimitiveOverrideProps<IconProps>;
    Vector273032?: PrimitiveOverrideProps<IconProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "Total Orders"?: PrimitiveOverrideProps<TextProps>;
    "20,245"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SalesSummaryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SalesSummaryOverridesProps | undefined | null;
}>;
export default function SalesSummary(props: SalesSummaryProps): React.ReactElement;
