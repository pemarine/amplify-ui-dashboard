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
export declare type HalfcirclechartOverridesProps = {
    Halfcirclechart?: PrimitiveOverrideProps<FlexProps>;
    "Completed Task"?: PrimitiveOverrideProps<TextProps>;
    "Graphic "?: PrimitiveOverrideProps<ViewProps>;
    "Half circle"?: PrimitiveOverrideProps<IconProps>;
    Progress?: PrimitiveOverrideProps<IconProps>;
    Indicator?: PrimitiveOverrideProps<IconProps>;
    "25.71%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HalfcirclechartProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HalfcirclechartOverridesProps | undefined | null;
}>;
export default function Halfcirclechart(props: HalfcirclechartProps): React.ReactElement;
