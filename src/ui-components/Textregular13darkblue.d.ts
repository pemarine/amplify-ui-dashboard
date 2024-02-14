/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Textregular13darkblueOverridesProps = {
    Textregular13darkblue?: PrimitiveOverrideProps<ViewProps>;
    "Side bar subtitle"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textregular13darkblueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textregular13darkblueOverridesProps | undefined | null;
}>;
export default function Textregular13darkblue(props: Textregular13darkblueProps): React.ReactElement;
