/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium18blackProps } from "./Textmedium18black";
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
export declare type TexteditlargeplaceholdereditingOverridesProps = {
    Texteditlargeplaceholderediting?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_18_black"?: Textmedium18blackProps;
} & EscapeHatchProps;
export declare type TexteditlargeplaceholdereditingProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditlargeplaceholdereditingOverridesProps | undefined | null;
}>;
export default function Texteditlargeplaceholderediting(props: TexteditlargeplaceholdereditingProps): React.ReactElement;
