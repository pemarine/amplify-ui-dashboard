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
export declare type ContractsOverridesProps = {
    Contracts?: PrimitiveOverrideProps<ViewProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    Contracts294034?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    Ellipse294042?: PrimitiveOverrideProps<IconProps>;
    Ellipse294043?: PrimitiveOverrideProps<IconProps>;
    Ellipse294045?: PrimitiveOverrideProps<IconProps>;
    Ellipse294044?: PrimitiveOverrideProps<IconProps>;
    Container294049?: PrimitiveOverrideProps<FlexProps>;
    Income294050?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3294051"?: PrimitiveOverrideProps<IconProps>;
    Archived?: PrimitiveOverrideProps<TextProps>;
    Container294057?: PrimitiveOverrideProps<FlexProps>;
    Income294058?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3294059"?: PrimitiveOverrideProps<IconProps>;
    Terminated?: PrimitiveOverrideProps<TextProps>;
    Container294061?: PrimitiveOverrideProps<FlexProps>;
    Income294062?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3294063"?: PrimitiveOverrideProps<IconProps>;
    Active?: PrimitiveOverrideProps<TextProps>;
    Container294065?: PrimitiveOverrideProps<FlexProps>;
    Income294066?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 3294067"?: PrimitiveOverrideProps<IconProps>;
    Pending?: PrimitiveOverrideProps<TextProps>;
    "25%294053"?: PrimitiveOverrideProps<TextProps>;
    "25%294259"?: PrimitiveOverrideProps<TextProps>;
    "35%"?: PrimitiveOverrideProps<TextProps>;
    "15%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContractsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ContractsOverridesProps | undefined | null;
}>;
export default function Contracts(props: ContractsProps): React.ReactElement;
