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
export declare type Statistics15OverridesProps = {
    Statistics15?: PrimitiveOverrideProps<ViewProps>;
    "Sharts / 15%"?: PrimitiveOverrideProps<ViewProps>;
    Oval0735?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
    "15%"?: PrimitiveOverrideProps<TextProps>;
    Oval0738?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Statistics15Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Statistics15OverridesProps | undefined | null;
}>;
export default function Statistics15(props: Statistics15Props): React.ReactElement;
