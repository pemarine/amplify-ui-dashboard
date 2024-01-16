/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SidemenuSmallOverridesProps = {
    SidemenuSmall?: PrimitiveOverrideProps<FlexProps>;
    Container92825?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Vector92827?: PrimitiveOverrideProps<IconProps>;
    Vector92828?: PrimitiveOverrideProps<IconProps>;
    Vector92829?: PrimitiveOverrideProps<IconProps>;
    Line92831?: PrimitiveOverrideProps<IconProps>;
    Overview?: PrimitiveOverrideProps<FlexProps>;
    Container92834?: PrimitiveOverrideProps<FlexProps>;
    SquaresFour?: PrimitiveOverrideProps<ViewProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    ChartBar?: PrimitiveOverrideProps<ViewProps>;
    CursorClick?: PrimitiveOverrideProps<ViewProps>;
    Line92849?: PrimitiveOverrideProps<IconProps>;
    "Shared Files"?: PrimitiveOverrideProps<FlexProps>;
    Ticket?: PrimitiveOverrideProps<ViewProps>;
    User?: PrimitiveOverrideProps<ViewProps>;
    Users?: PrimitiveOverrideProps<ViewProps>;
    Line92858?: PrimitiveOverrideProps<IconProps>;
    "Team Storage"?: PrimitiveOverrideProps<FlexProps>;
    Cube?: PrimitiveOverrideProps<ViewProps>;
    ShoppingCartSimple?: PrimitiveOverrideProps<ViewProps>;
    File?: PrimitiveOverrideProps<ViewProps>;
    Line92867?: PrimitiveOverrideProps<IconProps>;
    "Dark Mode"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    Container92874?: PrimitiveOverrideProps<FlexProps>;
    Gear?: PrimitiveOverrideProps<ViewProps>;
    "Designer Team"?: PrimitiveOverrideProps<FlexProps>;
    SignOut?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidemenuSmallProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidemenuSmallOverridesProps | undefined | null;
}>;
export default function SidemenuSmall(props: SidemenuSmallProps): React.ReactElement;
