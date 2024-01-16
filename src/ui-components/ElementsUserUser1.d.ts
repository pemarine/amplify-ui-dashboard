/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ElementsUserPhotoProps } from "./ElementsUserPhoto";
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
export declare type ElementsUserUser1OverridesProps = {
    ElementsUserUser1?: PrimitiveOverrideProps<ViewProps>;
    User?: PrimitiveOverrideProps<ViewProps>;
    Countries?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Photo?: ElementsUserPhotoProps;
} & EscapeHatchProps;
export declare type ElementsUserUser1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsUserUser1OverridesProps | undefined | null;
}>;
export default function ElementsUserUser1(props: ElementsUserUser1Props): React.ReactElement;
