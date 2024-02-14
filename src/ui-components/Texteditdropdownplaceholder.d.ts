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
export declare type TexteditdropdownplaceholderOverridesProps = {
    Texteditdropdownplaceholder?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Office meet-up"?: PrimitiveOverrideProps<TextProps>;
    Polygon?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TexteditdropdownplaceholderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditdropdownplaceholderOverridesProps | undefined | null;
}>;
export default function Texteditdropdownplaceholder(props: TexteditdropdownplaceholderProps): React.ReactElement;
