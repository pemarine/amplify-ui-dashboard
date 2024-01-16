/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Statistics46OverridesProps = {
    Statistics46?: PrimitiveOverrideProps<ViewProps>;
    "Sharts / Charts 2"?: PrimitiveOverrideProps<ViewProps>;
    Oval0741?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
    "46%"?: PrimitiveOverrideProps<TextProps>;
    Oval0744?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Statistics46Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Statistics46OverridesProps | undefined | null;
}>;
export default function Statistics46(props: Statistics46Props): React.ReactElement;
