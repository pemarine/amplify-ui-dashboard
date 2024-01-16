/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Statistics67Props } from "./Statistics67";
import { Statistics15Props } from "./Statistics15";
import { Statistics46Props } from "./Statistics46";
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
export declare type ElementsWidgetsWidget14OverridesProps = {
    ElementsWidgetsWidget14?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Text?: PrimitiveOverrideProps<TextProps>;
    Sharts0728?: Statistics67Props;
    Sharts0733?: Statistics15Props;
    Sharts0739?: Statistics46Props;
    Sharts0745?: Statistics67Props;
    "Elements / Info0746"?: ElementsInfoProps;
    "Elements / Info0747"?: ElementsInfoProps;
    "Elements / Info0748"?: ElementsInfoProps;
    "Elements / Info0749"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget14Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget14OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget14(props: ElementsWidgetsWidget14Props): React.ReactElement;
