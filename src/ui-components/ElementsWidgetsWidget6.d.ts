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
export declare type ElementsWidgetsWidget6OverridesProps = {
    ElementsWidgetsWidget6?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Info"?: ElementsInfoProps;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "25%"?: PrimitiveOverrideProps<TextProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget6Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget6OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget6(props: ElementsWidgetsWidget6Props): React.ReactElement;
