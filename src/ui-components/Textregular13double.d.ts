/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Textregular13doubleOverridesProps = {
    Textregular13double?: PrimitiveOverrideProps<ViewProps>;
    "Close date:"?: PrimitiveOverrideProps<TextProps>;
    "Dec 22, 2018"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textregular13doubleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textregular13doubleOverridesProps | undefined | null;
}>;
export default function Textregular13double(props: Textregular13doubleProps): React.ReactElement;
