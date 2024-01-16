/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsInfoProps } from "./ElementsInfo";
import { IconsMoreHorizontalProps } from "./IconsMoreHorizontal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsWidgetsWidget2OverridesProps = {
    ElementsWidgetsWidget2?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Info"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
    Rectangle0777?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0778?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0779?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0780?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0781?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0782?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0783?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0784?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0785?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0786?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0787?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0788?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget2OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget2(props: ElementsWidgetsWidget2Props): React.ReactElement;
