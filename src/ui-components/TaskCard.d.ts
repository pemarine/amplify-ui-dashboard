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
export declare type TaskCardOverridesProps = {
    TaskCard?: PrimitiveOverrideProps<ViewProps>;
    "Create a Landing Page"?: PrimitiveOverrideProps<TextProps>;
    "Frame 122"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34851240"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26851241"?: PrimitiveOverrideProps<FlexProps>;
    Design?: PrimitiveOverrideProps<TextProps>;
    "Frame 123"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34851247"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26851248"?: PrimitiveOverrideProps<FlexProps>;
    High?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    "Frame 127"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 51"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 52"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 53"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 54"?: PrimitiveOverrideProps<IconProps>;
    "+2"?: PrimitiveOverrideProps<TextProps>;
    "Frame 126"?: PrimitiveOverrideProps<FlexProps>;
    CalendarBlank?: PrimitiveOverrideProps<ViewProps>;
    "20 July - 28 July 2023"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TaskCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TaskCardOverridesProps | undefined | null;
}>;
export default function TaskCard(props: TaskCardProps): React.ReactElement;
