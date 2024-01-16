/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { ElementsLineVerticalProps } from "./ElementsLineVertical";
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
export declare type ElementsWidgetsWidget17OverridesProps = {
    ElementsWidgetsWidget17?: PrimitiveOverrideProps<ViewProps>;
    "Elements / BG"?: BGBGProps;
    "Elements / Line / Vertical01080"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01081"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01082"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01083"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01084"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01085"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01086"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01087"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01088"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01089"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01090"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01091"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01092"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01093"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01094"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01095"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01096"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01097"?: ElementsLineVerticalProps;
    "Elements / Line / Vertical01098"?: ElementsLineVerticalProps;
    "Elements / Info01099"?: ElementsInfoProps;
    "Elements / Info01100"?: ElementsInfoProps;
    "Icons / More / Horizontal"?: IconsMoreHorizontalProps;
    Text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ElementsWidgetsWidget17Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsWidgetsWidget17OverridesProps | undefined | null;
}>;
export default function ElementsWidgetsWidget17(props: ElementsWidgetsWidget17Props): React.ReactElement;
