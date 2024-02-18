/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CustomersOverridesProps = {
    Customers?: PrimitiveOverrideProps<ViewProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "11,875"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "56.9%"?: PrimitiveOverrideProps<TextProps>;
    ArrowRight?: PrimitiveOverrideProps<ViewProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    Users?: PrimitiveOverrideProps<ViewProps>;
    Impressions?: PrimitiveOverrideProps<TextProps>;
    Chart?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CustomersProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CustomersOverridesProps | undefined | null;
}>;
export default function Customers(props: CustomersProps): React.ReactElement;
