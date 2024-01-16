/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsLineGorizontalProps } from "./ElementsLineGorizontal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ElementsWidgetsWidget13OverridesProps = {
    ElementsWidgetsWidget13?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    Google?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0698"?: ElementsLineGorizontalProps;
    Title0699?: PrimitiveOverrideProps<TextProps>;
    Digits0700?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0701"?: ElementsLineGorizontalProps;
    Twitter?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0703"?: ElementsLineGorizontalProps;
    Title0704?: PrimitiveOverrideProps<TextProps>;
    Digits0705?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0706"?: ElementsLineGorizontalProps;
    Facebook?: PrimitiveOverrideProps<ViewProps>;
    "Elements / Line / Gorizontal0708"?: ElementsLineGorizontalProps;
    Title0709?: PrimitiveOverrideProps<TextProps>;
    Digits0710?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0711"?: ElementsLineGorizontalProps;
    Instagram?: PrimitiveOverrideProps<ViewProps>;
    Title0713?: PrimitiveOverrideProps<TextProps>;
    "Elements / Line / Gorizontal0714"?: ElementsLineGorizontalProps;
    "Elements / Line / Gorizontal0715"?: ElementsLineGorizontalProps;
    Digits0716?: PrimitiveOverrideProps<TextProps>;
    "Elements / Info0717"?: ElementsInfoProps;
    "Elements / Info0718"?: ElementsInfoProps;
    "Elements / Info0719"?: ElementsInfoProps;
    "Elements / Info0720"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget13Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget13OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget13(props: ElementsWidgetsWidget13Props): React.ReactElement;
