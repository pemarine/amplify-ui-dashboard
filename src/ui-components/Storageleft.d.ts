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
export declare type StorageleftOverridesProps = {
    Storageleft?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "34%"?: PrimitiveOverrideProps<TextProps>;
    "Storage left"?: PrimitiveOverrideProps<TextProps>;
    "Frame 21"?: PrimitiveOverrideProps<ViewProps>;
    "Upgrade Now!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StorageleftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StorageleftOverridesProps | undefined | null;
}>;
export default function Storageleft(props: StorageleftProps): React.ReactElement;
