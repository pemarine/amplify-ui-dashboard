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
export declare type AudienceSatisfactionOverridesProps = {
    AudienceSatisfaction?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    "Brand Sales"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 17"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 18"?: PrimitiveOverrideProps<IconProps>;
    "64.87%"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDE0A"?: PrimitiveOverrideProps<TextProps>;
    "Based on likes"?: PrimitiveOverrideProps<TextProps>;
    "Frame 35"?: PrimitiveOverrideProps<FlexProps>;
    Jan?: PrimitiveOverrideProps<TextProps>;
    Feb?: PrimitiveOverrideProps<TextProps>;
    "Frame 36"?: PrimitiveOverrideProps<FlexProps>;
    Mar?: PrimitiveOverrideProps<TextProps>;
    Apr?: PrimitiveOverrideProps<TextProps>;
    May?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AudienceSatisfactionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AudienceSatisfactionOverridesProps | undefined | null;
}>;
export default function AudienceSatisfaction(props: AudienceSatisfactionProps): React.ReactElement;
