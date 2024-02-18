/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SidemenuLargeOverridesProps = {
    SidemenuLarge?: PrimitiveOverrideProps<FlexProps>;
    Container92695?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    Vector92643?: PrimitiveOverrideProps<IconProps>;
    Vector92644?: PrimitiveOverrideProps<IconProps>;
    Vector92645?: PrimitiveOverrideProps<IconProps>;
    Dashcube?: PrimitiveOverrideProps<IconProps>;
    Line92647?: PrimitiveOverrideProps<IconProps>;
    Container92680?: PrimitiveOverrideProps<FlexProps>;
    Overview?: PrimitiveOverrideProps<ViewProps>;
    Container92655?: PrimitiveOverrideProps<FlexProps>;
    SquaresFour?: PrimitiveOverrideProps<ViewProps>;
    Dashboard?: PrimitiveOverrideProps<TextProps>;
    "Shared Files103409"?: PrimitiveOverrideProps<FlexProps>;
    Analytics?: PrimitiveOverrideProps<TextProps>;
    "Shared Folder103411"?: PrimitiveOverrideProps<FlexProps>;
    ChartBar?: PrimitiveOverrideProps<ViewProps>;
    Performance?: PrimitiveOverrideProps<TextProps>;
    "Shared Files103414"?: PrimitiveOverrideProps<FlexProps>;
    CursorClick?: PrimitiveOverrideProps<ViewProps>;
    Hotjar?: PrimitiveOverrideProps<TextProps>;
    Line92681?: PrimitiveOverrideProps<IconProps>;
    "Team Storage"?: PrimitiveOverrideProps<FlexProps>;
    SUPPORT?: PrimitiveOverrideProps<TextProps>;
    "Designer Team361"?: PrimitiveOverrideProps<FlexProps>;
    Ticket?: PrimitiveOverrideProps<ViewProps>;
    Tickets?: PrimitiveOverrideProps<TextProps>;
    "Developer Team367"?: PrimitiveOverrideProps<FlexProps>;
    User?: PrimitiveOverrideProps<ViewProps>;
    Agents?: PrimitiveOverrideProps<TextProps>;
    "Developer Team103421"?: PrimitiveOverrideProps<FlexProps>;
    Users?: PrimitiveOverrideProps<ViewProps>;
    Customers?: PrimitiveOverrideProps<TextProps>;
    Line92684?: PrimitiveOverrideProps<IconProps>;
    "Shared Files92683"?: PrimitiveOverrideProps<FlexProps>;
    Shop?: PrimitiveOverrideProps<TextProps>;
    "Shared Folder345"?: PrimitiveOverrideProps<FlexProps>;
    Cube?: PrimitiveOverrideProps<ViewProps>;
    Products?: PrimitiveOverrideProps<TextProps>;
    "Shared Files351"?: PrimitiveOverrideProps<FlexProps>;
    ShoppingCartSimple?: PrimitiveOverrideProps<ViewProps>;
    Orders?: PrimitiveOverrideProps<TextProps>;
    "Shared Files103426"?: PrimitiveOverrideProps<FlexProps>;
    File?: PrimitiveOverrideProps<ViewProps>;
    Reports?: PrimitiveOverrideProps<TextProps>;
    Line92687?: PrimitiveOverrideProps<IconProps>;
    "Dark Mode92688"?: PrimitiveOverrideProps<FlexProps>;
    "Dark Mode376"?: PrimitiveOverrideProps<FlexProps>;
    Moon?: PrimitiveOverrideProps<ViewProps>;
    "Dark Mode380"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    Container92691?: PrimitiveOverrideProps<FlexProps>;
    "Designer Team92560"?: PrimitiveOverrideProps<FlexProps>;
    Gear?: PrimitiveOverrideProps<ViewProps>;
    Settings?: PrimitiveOverrideProps<TextProps>;
    "Designer Team92553"?: PrimitiveOverrideProps<FlexProps>;
    SignOut?: PrimitiveOverrideProps<ViewProps>;
    "Log Out"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SidemenuLargeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SidemenuLargeOverridesProps | undefined | null;
}>;
export default function SidemenuLarge(props: SidemenuLargeProps): React.ReactElement;
