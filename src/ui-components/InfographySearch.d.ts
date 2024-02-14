/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type InfographySearchOverridesProps = {
    InfographySearch?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<FlexProps>;
    Responsible?: PrimitiveOverrideProps<TextProps>;
    "vuesax/linear/close"?: PrimitiveOverrideProps<ViewProps>;
    Divisor?: PrimitiveOverrideProps<ViewProps>;
    "General Recommen..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InfographySearchProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: InfographySearchOverridesProps | undefined | null;
}>;
export default function InfographySearch(props: InfographySearchProps): React.ReactElement;
