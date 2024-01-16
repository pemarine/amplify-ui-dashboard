/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsLineGorizontalProps } from "./ElementsLineGorizontal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsWidgetsWidget11OverridesProps = {
    ElementsWidgetsWidget11?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Bihance?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0917"?: ElementsLineGorizontalProps;
    Title0918?: PrimitiveOverrideProps<TextProps>;
    Digits0919?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0920"?: ElementsLineGorizontalProps;
    Twitter?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0922"?: ElementsLineGorizontalProps;
    Title0923?: PrimitiveOverrideProps<TextProps>;
    Digits0924?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0925"?: ElementsLineGorizontalProps;
    Facebook?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0927"?: ElementsLineGorizontalProps;
    Title0928?: PrimitiveOverrideProps<TextProps>;
    Digits0929?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0930"?: ElementsLineGorizontalProps;
    Instagram?: PrimitiveOverrideProps<ViewProps>;
    Title0932?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0933"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0934"?: ElementsLineGorizontalProps;
    Digits0935?: PrimitiveOverrideProps<TextProps>;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Title0937?: PrimitiveOverrideProps<TextProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget11Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget11OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget11(props: ElementsWidgetsWidget11Props): React.ReactElement;
