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
export declare type VisitsOverridesProps = {
    "32"?: PrimitiveOverrideProps<TextProps>;
    Visits?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    Visits293692?: PrimitiveOverrideProps<TextProps>;
    "3,863"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "4.65%"?: PrimitiveOverrideProps<TextProps>;
    ArrowRight?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 17"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 18"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 19"?: PrimitiveOverrideProps<IconProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Income?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293710"?: PrimitiveOverrideProps<IconProps>;
    Chrome?: PrimitiveOverrideProps<TextProps>;
    Expense293712?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293713"?: PrimitiveOverrideProps<IconProps>;
    Firefox?: PrimitiveOverrideProps<TextProps>;
    Expense293715?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293716"?: PrimitiveOverrideProps<IconProps>;
    Safari?: PrimitiveOverrideProps<TextProps>;
    "Active Users"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type VisitsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VisitsOverridesProps | undefined | null;
}>;
export default function Visits(props: VisitsProps): React.ReactElement;
