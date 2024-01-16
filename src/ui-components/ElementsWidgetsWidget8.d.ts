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
export declare type ElementsWidgetsWidget8OverridesProps = {
    ElementsWidgetsWidget8?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 11"?: PrimitiveOverrideProps<ViewProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Elements / Info0854"?: ElementsInfoProps;
    "Elements / Info0855"?: ElementsInfoProps;
    "Elements / Info0856"?: ElementsInfoProps;
    "Elements / Info0857"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget8Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget8OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget8(props: ElementsWidgetsWidget8Props): React.ReactElement;
