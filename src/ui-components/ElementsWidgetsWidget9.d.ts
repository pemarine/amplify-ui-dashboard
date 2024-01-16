/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsInfoProps } from "./ElementsInfo";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsWidgetsWidget9OverridesProps = {
    ElementsWidgetsWidget9?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Info0673"?: ElementsInfoProps;
    "Elements / Info0674"?: ElementsInfoProps;
    "Elements / Info0675"?: ElementsInfoProps;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    Fill0679?: PrimitiveOverrideProps<IconProps>;
    Path0677?: PrimitiveOverrideProps<IconProps>;
    Path0678?: PrimitiveOverrideProps<IconProps>;
    Fill0682?: PrimitiveOverrideProps<IconProps>;
    Path0680?: PrimitiveOverrideProps<IconProps>;
    Path0681?: PrimitiveOverrideProps<IconProps>;
    Fill0685?: PrimitiveOverrideProps<IconProps>;
    Path0683?: PrimitiveOverrideProps<IconProps>;
    Path0684?: PrimitiveOverrideProps<IconProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget9Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget9OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget9(props: ElementsWidgetsWidget9Props): React.ReactElement;
