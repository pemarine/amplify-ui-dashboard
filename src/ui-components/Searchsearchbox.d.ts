/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconothersearchProps } from "./Iconothersearch";
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
export declare type SearchsearchboxOverridesProps = {
    Searchsearchbox?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    search?: PrimitiveOverrideProps<ViewProps>;
    "Search colleague"?: PrimitiveOverrideProps<TextProps>;
    "icon/other/search"?: IconothersearchProps;
} & EscapeHatchProps;
export declare type SearchsearchboxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchsearchboxOverridesProps | undefined | null;
}>;
export default function Searchsearchbox(props: SearchsearchboxProps): React.ReactElement;
