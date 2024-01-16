/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsCalendarDateOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    ElementsCalendarDate?: PrimitiveOverrideProps<ViewProps>;
    BG?: PrimitiveOverrideProps<ViewProps>;
    Line?: PrimitiveOverrideProps<IconProps>;
    Rectangle02187?: PrimitiveOverrideProps<ViewProps>;
    Rectangle02188?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ElementsCalendarDateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsCalendarDateOverridesProps | undefined | null;
}>;
export default function ElementsCalendarDate(props: ElementsCalendarDateProps): React.ReactElement;
