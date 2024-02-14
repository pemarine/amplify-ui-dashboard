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
export declare type Textmedium11grayOverridesProps = {
    Textmedium11gray?: PrimitiveOverrideProps<ViewProps>;
    "profile@email.com"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textmedium11grayProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textmedium11grayOverridesProps | undefined | null;
}>;
export default function Textmedium11gray(props: Textmedium11grayProps): React.ReactElement;
