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
export declare type ElementsWidgetsWidget12OverridesProps = {
    ElementsWidgetsWidget12?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "01"?: PrimitiveOverrideProps<TextProps>;
    "02"?: PrimitiveOverrideProps<TextProps>;
    "03"?: PrimitiveOverrideProps<TextProps>;
    "04"?: PrimitiveOverrideProps<TextProps>;
    "05"?: PrimitiveOverrideProps<TextProps>;
    "06"?: PrimitiveOverrideProps<TextProps>;
    "07"?: PrimitiveOverrideProps<TextProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Path0950?: PrimitiveOverrideProps<IconProps>;
    Path0951?: PrimitiveOverrideProps<IconProps>;
    Path0952?: PrimitiveOverrideProps<IconProps>;
    Path0953?: PrimitiveOverrideProps<IconProps>;
    "Elements / Info0954"?: ElementsInfoProps;
    "Elements / Info0955"?: ElementsInfoProps;
    "Elements / Info0956"?: ElementsInfoProps;
    "Elements / Info0957"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget12Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget12OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget12(props: ElementsWidgetsWidget12Props): React.ReactElement;
