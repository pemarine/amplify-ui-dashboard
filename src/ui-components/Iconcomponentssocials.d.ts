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
export declare type IconcomponentssocialsOverridesProps = {
    Iconcomponentssocials?: PrimitiveOverrideProps<ViewProps>;
    Vector131610232?: PrimitiveOverrideProps<IconProps>;
    Vector131610233?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610235?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610236?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610237?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610238?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type IconcomponentssocialsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconcomponentssocialsOverridesProps | undefined | null;
}>;
export default function Iconcomponentssocials(props: IconcomponentssocialsProps): React.ReactElement;
