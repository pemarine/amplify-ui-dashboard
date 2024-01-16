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
export declare type StatisticsOverridesProps = {
    Statistics?: PrimitiveOverrideProps<ViewProps>;
    Statistics293130?: PrimitiveOverrideProps<TextProps>;
    Dropdown?: PrimitiveOverrideProps<FlexProps>;
    Monthly?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    Jan?: PrimitiveOverrideProps<TextProps>;
    Mar?: PrimitiveOverrideProps<TextProps>;
    May?: PrimitiveOverrideProps<TextProps>;
    Jul?: PrimitiveOverrideProps<TextProps>;
    Aug?: PrimitiveOverrideProps<TextProps>;
    Sep?: PrimitiveOverrideProps<TextProps>;
    Oct?: PrimitiveOverrideProps<TextProps>;
    Nov?: PrimitiveOverrideProps<TextProps>;
    Dec?: PrimitiveOverrideProps<TextProps>;
    "50%"?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "40%"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "30%"?: PrimitiveOverrideProps<TextProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "20%"?: PrimitiveOverrideProps<TextProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "10%"?: PrimitiveOverrideProps<TextProps>;
    "0%"?: PrimitiveOverrideProps<TextProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Frame 29"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 5"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 4"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 8"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 9"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 10"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 11"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 12"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 7"?: PrimitiveOverrideProps<IconProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "34%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StatisticsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatisticsOverridesProps | undefined | null;
}>;
export default function Statistics(props: StatisticsProps): React.ReactElement;
