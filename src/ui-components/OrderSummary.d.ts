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
export declare type OrderSummaryOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    "10"?: PrimitiveOverrideProps<TextProps>;
    "20"?: PrimitiveOverrideProps<TextProps>;
    "30"?: PrimitiveOverrideProps<TextProps>;
    "38"?: PrimitiveOverrideProps<TextProps>;
    "40"?: PrimitiveOverrideProps<TextProps>;
    "50"?: PrimitiveOverrideProps<TextProps>;
    "60"?: PrimitiveOverrideProps<TextProps>;
    OrderSummary?: PrimitiveOverrideProps<ViewProps>;
    "Order Summary"?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Mo?: PrimitiveOverrideProps<TextProps>;
    Tu?: PrimitiveOverrideProps<TextProps>;
    We?: PrimitiveOverrideProps<TextProps>;
    Th?: PrimitiveOverrideProps<TextProps>;
    Fr?: PrimitiveOverrideProps<TextProps>;
    Sa?: PrimitiveOverrideProps<TextProps>;
    Su?: PrimitiveOverrideProps<TextProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    Report?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32"?: PrimitiveOverrideProps<ViewProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "Total Orders"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type OrderSummaryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OrderSummaryOverridesProps | undefined | null;
}>;
export default function OrderSummary(props: OrderSummaryProps): React.ReactElement;
