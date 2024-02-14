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
export declare type ActivityOverridesProps = {
    Activity?: PrimitiveOverrideProps<ViewProps>;
    "Overall Sales"?: PrimitiveOverrideProps<TextProps>;
    Dropdown?: PrimitiveOverrideProps<FlexProps>;
    "This Month"?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 14"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 16"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 15"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 13"?: PrimitiveOverrideProps<IconProps>;
    "$239,991"?: PrimitiveOverrideProps<TextProps>;
    "Total Spent"?: PrimitiveOverrideProps<TextProps>;
    Container293491?: PrimitiveOverrideProps<FlexProps>;
    Income293492?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293493"?: PrimitiveOverrideProps<IconProps>;
    Subscription?: PrimitiveOverrideProps<TextProps>;
    "45%"?: PrimitiveOverrideProps<TextProps>;
    "24%"?: PrimitiveOverrideProps<TextProps>;
    "15%293515"?: PrimitiveOverrideProps<TextProps>;
    "15%293516"?: PrimitiveOverrideProps<TextProps>;
    Container293501?: PrimitiveOverrideProps<FlexProps>;
    Income293502?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293503"?: PrimitiveOverrideProps<IconProps>;
    Investing?: PrimitiveOverrideProps<TextProps>;
    Container293505?: PrimitiveOverrideProps<FlexProps>;
    Income293506?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293507"?: PrimitiveOverrideProps<IconProps>;
    Groceries?: PrimitiveOverrideProps<TextProps>;
    Container293509?: PrimitiveOverrideProps<FlexProps>;
    Income293510?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293511"?: PrimitiveOverrideProps<IconProps>;
    "Online Shop"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActivityProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActivityOverridesProps | undefined | null;
}>;
export default function Activity(props: ActivityProps): React.ReactElement;
