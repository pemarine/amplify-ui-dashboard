/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type IconcomponentsheaderOverridesProps = {
    Iconcomponentsheader?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610228?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610229?: PrimitiveOverrideProps<ViewProps>;
    Rectangle131610230?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type IconcomponentsheaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconcomponentsheaderOverridesProps | undefined | null;
}>;
export default function Iconcomponentsheader(props: IconcomponentsheaderProps): React.ReactElement;
