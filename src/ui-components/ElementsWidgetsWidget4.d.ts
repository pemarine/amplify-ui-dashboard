/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconsMoreHorizontalProps } from "./IconsMoreHorizontal";
import { ElementsInfoProps } from "./ElementsInfo";
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
export declare type ElementsWidgetsWidget4OverridesProps = {
    ElementsWidgetsWidget4?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 50804"?: PrimitiveOverrideProps<ViewProps>;
    Mask0806?: PrimitiveOverrideProps<ViewProps>;
    Mask0805?: PrimitiveOverrideProps<ViewProps>;
    "Group 50807"?: PrimitiveOverrideProps<ViewProps>;
    Shape0808?: PrimitiveOverrideProps<IconProps>;
    Shape0809?: PrimitiveOverrideProps<IconProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Info0812"?: ElementsInfoProps;
    "Elements / Info0813"?: ElementsInfoProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget4Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget4OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget4(props: ElementsWidgetsWidget4Props): React.ReactElement;
