/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ElementsInfoProps } from "./ElementsInfo";
import { IconsMoreHorizontalProps } from "./IconsMoreHorizontal";
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
export declare type ElementsWidgetsWidget7OverridesProps = {
    ElementsWidgetsWidget7?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<IconProps>;
    Path?: PrimitiveOverrideProps<IconProps>;
    "Elements / Info0842"?: ElementsInfoProps;
    "Elements / Info0843"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget7Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget7OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget7(props: ElementsWidgetsWidget7Props): React.ReactElement;
