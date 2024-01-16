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
export declare type BrandSalesOverridesProps = {
    BrandSales?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Income?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293822"?: PrimitiveOverrideProps<IconProps>;
    Jordan?: PrimitiveOverrideProps<TextProps>;
    Expense293824?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293825"?: PrimitiveOverrideProps<IconProps>;
    Nike?: PrimitiveOverrideProps<TextProps>;
    Expense293827?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3293828"?: PrimitiveOverrideProps<IconProps>;
    Adidas?: PrimitiveOverrideProps<TextProps>;
    "Brand Sales"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    Ellipse293858?: PrimitiveOverrideProps<IconProps>;
    Ellipse293859?: PrimitiveOverrideProps<IconProps>;
    Ellipse293860?: PrimitiveOverrideProps<IconProps>;
    ring03?: PrimitiveOverrideProps<IconProps>;
    ring02?: PrimitiveOverrideProps<IconProps>;
    ring01?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BrandSalesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BrandSalesOverridesProps | undefined | null;
}>;
export default function BrandSales(props: BrandSalesProps): React.ReactElement;
