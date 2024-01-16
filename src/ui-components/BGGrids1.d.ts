/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ElementsLineGorizontalProps } from "./ElementsLineGorizontal";
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
export declare type BGGrids1OverridesProps = {
    "100"?: PrimitiveOverrideProps<TextProps>;
    "200"?: PrimitiveOverrideProps<TextProps>;
    "300"?: PrimitiveOverrideProps<TextProps>;
    "400"?: PrimitiveOverrideProps<TextProps>;
    "500"?: PrimitiveOverrideProps<TextProps>;
    "600"?: PrimitiveOverrideProps<TextProps>;
    "700"?: PrimitiveOverrideProps<TextProps>;
    BGGrids1?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Horizontal?: PrimitiveOverrideProps<ViewProps>;
    "1 / 12"?: PrimitiveOverrideProps<TextProps>;
    "2 / 12"?: PrimitiveOverrideProps<TextProps>;
    "3 / 12"?: PrimitiveOverrideProps<TextProps>;
    "4 / 12"?: PrimitiveOverrideProps<TextProps>;
    "5 / 12"?: PrimitiveOverrideProps<TextProps>;
    "6 / 12"?: PrimitiveOverrideProps<TextProps>;
    "7 / 12"?: PrimitiveOverrideProps<TextProps>;
    "8 / 12"?: PrimitiveOverrideProps<TextProps>;
    "9 / 12"?: PrimitiveOverrideProps<TextProps>;
    "10 / 12"?: PrimitiveOverrideProps<TextProps>;
    "11 / 12"?: PrimitiveOverrideProps<TextProps>;
    "12 / 12"?: PrimitiveOverrideProps<TextProps>;
    Vertical?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0441"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0442"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0443"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0444"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0445"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0446"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0447"?: ElementsLineGorizontalProps;
} & EscapeHatchProps;
export declare type BGGrids1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BGGrids1OverridesProps | undefined | null;
}>;
export default function BGGrids1(props: BGGrids1Props): React.ReactElement;
