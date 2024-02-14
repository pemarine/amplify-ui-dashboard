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
export declare type Textregular10OverridesProps = {
    Textregular10?: PrimitiveOverrideProps<ViewProps>;
    "Closed deals"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textregular10Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textregular10OverridesProps | undefined | null;
}>;
export default function Textregular10(props: Textregular10Props): React.ReactElement;
