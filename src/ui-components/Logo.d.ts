/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogoOverridesProps = {
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "Craftwork Logo"?: PrimitiveOverrideProps<ViewProps>;
    Logo056?: PrimitiveOverrideProps<IconProps>;
    Path054?: PrimitiveOverrideProps<IconProps>;
    Path055?: PrimitiveOverrideProps<IconProps>;
    Path057?: PrimitiveOverrideProps<IconProps>;
    Path058?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoOverridesProps | undefined | null;
}>;
export default function Logo(props: LogoProps): React.ReactElement;
