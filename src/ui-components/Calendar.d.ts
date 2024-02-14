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
export declare type CalendarOverridesProps = {
    "10"?: PrimitiveOverrideProps<TextProps>;
    "11"?: PrimitiveOverrideProps<TextProps>;
    "12"?: PrimitiveOverrideProps<TextProps>;
    "13"?: PrimitiveOverrideProps<TextProps>;
    "14"?: PrimitiveOverrideProps<TextProps>;
    "15"?: PrimitiveOverrideProps<TextProps>;
    "16"?: PrimitiveOverrideProps<TextProps>;
    "17"?: PrimitiveOverrideProps<TextProps>;
    "18"?: PrimitiveOverrideProps<TextProps>;
    "19"?: PrimitiveOverrideProps<TextProps>;
    "20"?: PrimitiveOverrideProps<TextProps>;
    "21"?: PrimitiveOverrideProps<TextProps>;
    "22"?: PrimitiveOverrideProps<TextProps>;
    "23"?: PrimitiveOverrideProps<TextProps>;
    "24"?: PrimitiveOverrideProps<TextProps>;
    "25"?: PrimitiveOverrideProps<TextProps>;
    "26"?: PrimitiveOverrideProps<TextProps>;
    "27"?: PrimitiveOverrideProps<TextProps>;
    "28"?: PrimitiveOverrideProps<TextProps>;
    "31"?: PrimitiveOverrideProps<TextProps>;
    "1607608"?: PrimitiveOverrideProps<TextProps>;
    "1607670"?: PrimitiveOverrideProps<TextProps>;
    "2607610"?: PrimitiveOverrideProps<TextProps>;
    "2607672"?: PrimitiveOverrideProps<TextProps>;
    "3607612"?: PrimitiveOverrideProps<TextProps>;
    "3607674"?: PrimitiveOverrideProps<TextProps>;
    "4607614"?: PrimitiveOverrideProps<TextProps>;
    "4607676"?: PrimitiveOverrideProps<TextProps>;
    "5607616"?: PrimitiveOverrideProps<TextProps>;
    "5607678"?: PrimitiveOverrideProps<TextProps>;
    "6607618"?: PrimitiveOverrideProps<TextProps>;
    "6607680"?: PrimitiveOverrideProps<TextProps>;
    "7607620"?: PrimitiveOverrideProps<TextProps>;
    "7607682"?: PrimitiveOverrideProps<TextProps>;
    "8607622"?: PrimitiveOverrideProps<TextProps>;
    "8607684"?: PrimitiveOverrideProps<TextProps>;
    "9607624"?: PrimitiveOverrideProps<TextProps>;
    "9607686"?: PrimitiveOverrideProps<TextProps>;
    "29607601"?: PrimitiveOverrideProps<TextProps>;
    "29607665"?: PrimitiveOverrideProps<TextProps>;
    "30607603"?: PrimitiveOverrideProps<TextProps>;
    "30607668"?: PrimitiveOverrideProps<TextProps>;
    Calendar?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 50"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 514"?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Frame 125"?: PrimitiveOverrideProps<FlexProps>;
    "April 2023"?: PrimitiveOverrideProps<TextProps>;
    CaretDown?: PrimitiveOverrideProps<ViewProps>;
    Mo?: PrimitiveOverrideProps<TextProps>;
    Tu?: PrimitiveOverrideProps<TextProps>;
    We?: PrimitiveOverrideProps<TextProps>;
    Th?: PrimitiveOverrideProps<TextProps>;
    Fri?: PrimitiveOverrideProps<TextProps>;
    Sa?: PrimitiveOverrideProps<TextProps>;
    Su?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 48"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 49"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CalendarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CalendarOverridesProps | undefined | null;
}>;
export default function Calendar(props: CalendarProps): React.ReactElement;
