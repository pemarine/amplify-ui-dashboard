/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { OvalProps } from "./Oval";
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
export declare type Statistics67OverridesProps = {
    Statistics67?: PrimitiveOverrideProps<ViewProps>;
    "Sharts / Charts 1"?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Oval"?: OvalProps;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "67%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Statistics67Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Statistics67OverridesProps | undefined | null;
}>;
export default function Statistics67(props: Statistics67Props): React.ReactElement;
