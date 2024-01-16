/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
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
export declare type ElementsCalendarEventOverridesProps = {
    ElementsCalendarEvent?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsCalendarEventProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsCalendarEventOverridesProps | undefined | null;
}>;
export default function ElementsCalendarEvent(props: ElementsCalendarEventProps): React.ReactElement;
