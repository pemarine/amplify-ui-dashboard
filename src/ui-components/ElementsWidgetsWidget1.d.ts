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
export declare type ElementsWidgetsWidget1OverridesProps = {
    ElementsWidgetsWidget1?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Info0761"?: ElementsInfoProps;
    "Elements / Info0762"?: ElementsInfoProps;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    "Fill 10766"?: PrimitiveOverrideProps<IconProps>;
    "Fill 10765"?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "47%"?: PrimitiveOverrideProps<TextProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget1OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget1(props: ElementsWidgetsWidget1Props): React.ReactElement;
