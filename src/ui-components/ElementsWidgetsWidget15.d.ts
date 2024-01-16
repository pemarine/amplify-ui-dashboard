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
export declare type ElementsWidgetsWidget15OverridesProps = {
    ElementsWidgetsWidget15?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Group 20863"?: PrimitiveOverrideProps<ViewProps>;
    Mask0865?: PrimitiveOverrideProps<ViewProps>;
    Mask0864?: PrimitiveOverrideProps<ViewProps>;
    "Group 20866"?: PrimitiveOverrideProps<ViewProps>;
    Shape0867?: PrimitiveOverrideProps<IconProps>;
    Shape0868?: PrimitiveOverrideProps<IconProps>;
    Shape0869?: PrimitiveOverrideProps<IconProps>;
    "Elements / Info0870"?: ElementsInfoProps;
    "Elements / Info0871"?: ElementsInfoProps;
    "Elements / Info0872"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget15Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget15OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget15(props: ElementsWidgetsWidget15Props): React.ReactElement;
