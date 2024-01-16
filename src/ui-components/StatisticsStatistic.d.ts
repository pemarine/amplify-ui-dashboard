/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type StatisticsStatisticOverridesProps = {
    StatisticsStatistic?: PrimitiveOverrideProps<ViewProps>;
    "Fill 101441"?: PrimitiveOverrideProps<IconProps>;
    "Fill 101440"?: PrimitiveOverrideProps<IconProps>;
    Oval?: PrimitiveOverrideProps<IconProps>;
    "64%"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StatisticsStatisticProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatisticsStatisticOverridesProps | undefined | null;
}>;
export default function StatisticsStatistic(props: StatisticsStatisticProps): React.ReactElement;
