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
export declare type NewsletterSubscribersOverridesProps = {
    NewsletterSubscribers?: PrimitiveOverrideProps<ViewProps>;
    "Frame 121"?: PrimitiveOverrideProps<FlexProps>;
    EnvelopeOpen?: PrimitiveOverrideProps<ViewProps>;
    "Newsletter Subscribers"?: PrimitiveOverrideProps<TextProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "11,875"?: PrimitiveOverrideProps<TextProps>;
    "Frame 122"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 26"?: PrimitiveOverrideProps<FlexProps>;
    "34.3%"?: PrimitiveOverrideProps<TextProps>;
    ArrowRight?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    "Frame 19"?: PrimitiveOverrideProps<ViewProps>;
    "Recent Sales"?: PrimitiveOverrideProps<TextProps>;
    "Group 37000"?: PrimitiveOverrideProps<ViewProps>;
    "#"?: PrimitiveOverrideProps<TextProps>;
    "Customer ID"?: PrimitiveOverrideProps<TextProps>;
    "Customer Name"?: PrimitiveOverrideProps<TextProps>;
    "Item Name"?: PrimitiveOverrideProps<TextProps>;
    "Order Date"?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    "Group 36999"?: PrimitiveOverrideProps<ViewProps>;
    "01"?: PrimitiveOverrideProps<TextProps>;
    "#897632"?: PrimitiveOverrideProps<TextProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Cameron Williamson"?: PrimitiveOverrideProps<TextProps>;
    "Frame 30"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 6"?: PrimitiveOverrideProps<IconProps>;
    "1x iPhone Cover"?: PrimitiveOverrideProps<TextProps>;
    "21/05/2023 09:31"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32"?: PrimitiveOverrideProps<FlexProps>;
    Paid?: PrimitiveOverrideProps<TextProps>;
    $20?: PrimitiveOverrideProps<TextProps>;
    "Frame 17"?: PrimitiveOverrideProps<FlexProps>;
    Filter?: PrimitiveOverrideProps<TextProps>;
    "Iconly/Curved/Outline/Filter 2"?: PrimitiveOverrideProps<ViewProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewsletterSubscribersProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewsletterSubscribersOverridesProps | undefined | null;
}>;
export default function NewsletterSubscribers(props: NewsletterSubscribersProps): React.ReactElement;
