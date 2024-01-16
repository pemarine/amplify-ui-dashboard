/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ElementsCheckmarkProps } from "./ElementsCheckmark";
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
export declare type ChartOverridesProps = {
    Chart?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Time?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Saze?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Elements / Checkmark"?: ElementsCheckmarkProps;
} & EscapeHatchProps;
export declare type ChartProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChartOverridesProps | undefined | null;
}>;
export default function Chart(props: ChartProps): React.ReactElement;
