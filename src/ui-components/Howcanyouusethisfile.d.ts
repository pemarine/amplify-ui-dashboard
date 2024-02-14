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
export declare type HowcanyouusethisfileOverridesProps = {
    Howcanyouusethisfile?: PrimitiveOverrideProps<FlexProps>;
    Subheading4022211?: PrimitiveOverrideProps<TextProps>;
    "Atoms / Feature"?: PrimitiveOverrideProps<FlexProps>;
    "flashlight-fill 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector4268106?: PrimitiveOverrideProps<IconProps>;
    Vector4268107?: PrimitiveOverrideProps<IconProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Subheading42312659?: PrimitiveOverrideProps<FlexProps>;
    Reason?: PrimitiveOverrideProps<TextProps>;
    Bullets?: PrimitiveOverrideProps<TextProps>;
    "Supporting text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HowcanyouusethisfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HowcanyouusethisfileOverridesProps | undefined | null;
}>;
export default function Howcanyouusethisfile(props: HowcanyouusethisfileProps): React.ReactElement;
