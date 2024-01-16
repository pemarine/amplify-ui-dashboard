/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ImpressionsOverridesProps = {
    Impressions?: PrimitiveOverrideProps<ViewProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    Eye?: PrimitiveOverrideProps<ViewProps>;
    Impressions52260?: PrimitiveOverrideProps<TextProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "11,875"?: PrimitiveOverrideProps<TextProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "56.9%"?: PrimitiveOverrideProps<TextProps>;
    ArrowRight?: PrimitiveOverrideProps<ViewProps>;
    "Frame 33"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
    "Vector 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ImpressionsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ImpressionsOverridesProps | undefined | null;
}>;
export default function Impressions(props: ImpressionsProps): React.ReactElement;
