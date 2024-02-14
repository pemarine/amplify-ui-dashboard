/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconothernotificationsProps } from "./Iconothernotifications";
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
export declare type SearchsearchbarOverridesProps = {
    Searchsearchbar?: PrimitiveOverrideProps<ViewProps>;
    top_bar_bg?: PrimitiveOverrideProps<ViewProps>;
    "icon/other/notifications"?: IconothernotificationsProps;
    search?: PrimitiveOverrideProps<ViewProps>;
    "Search for a mail"?: PrimitiveOverrideProps<TextProps>;
    "icon/other/search"?: IconothersearchProps;
} & EscapeHatchProps;
export declare type SearchsearchbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchsearchbarOverridesProps | undefined | null;
}>;
export default function Searchsearchbar(props: SearchsearchbarProps): React.ReactElement;
