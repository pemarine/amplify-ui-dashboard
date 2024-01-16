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
export declare type RevenueOverridesProps = {
    "0"?: PrimitiveOverrideProps<TextProps>;
    Revenue?: PrimitiveOverrideProps<ViewProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Revenue233464?: PrimitiveOverrideProps<TextProps>;
    Numbers?: PrimitiveOverrideProps<FlexProps>;
    "$302,782"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "3.24%"?: PrimitiveOverrideProps<TextProps>;
    ArrowRight?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    "Frame 22"?: PrimitiveOverrideProps<FlexProps>;
    "50k"?: PrimitiveOverrideProps<TextProps>;
    "40k"?: PrimitiveOverrideProps<TextProps>;
    "30k"?: PrimitiveOverrideProps<TextProps>;
    "20k"?: PrimitiveOverrideProps<TextProps>;
    "10k"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    Mo?: PrimitiveOverrideProps<TextProps>;
    Tu?: PrimitiveOverrideProps<TextProps>;
    We?: PrimitiveOverrideProps<TextProps>;
    Th?: PrimitiveOverrideProps<TextProps>;
    Fr?: PrimitiveOverrideProps<TextProps>;
    Sa?: PrimitiveOverrideProps<TextProps>;
    Su?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type RevenueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RevenueOverridesProps | undefined | null;
}>;
export default function Revenue(props: RevenueProps): React.ReactElement;
