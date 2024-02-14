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
export declare type Textitalic12OverridesProps = {
    Textitalic12?: PrimitiveOverrideProps<ViewProps>;
    "Nicci is typing a message..."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textitalic12Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textitalic12OverridesProps | undefined | null;
}>;
export default function Textitalic12(props: Textitalic12Props): React.ReactElement;
