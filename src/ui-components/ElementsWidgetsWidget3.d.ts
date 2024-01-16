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
export declare type ElementsWidgetsWidget3OverridesProps = {
    ElementsWidgetsWidget3?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Info0792"?: ElementsInfoProps;
    "Elements / Info0793"?: ElementsInfoProps;
    "Elements / Info0794"?: ElementsInfoProps;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    "Fill 3"?: PrimitiveOverrideProps<IconProps>;
    "Fill 5"?: PrimitiveOverrideProps<IconProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget3OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget3(props: ElementsWidgetsWidget3Props): React.ReactElement;
