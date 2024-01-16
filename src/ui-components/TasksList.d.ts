/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type TasksListOverridesProps = {
    TasksList?: PrimitiveOverrideProps<ViewProps>;
    Title594401?: PrimitiveOverrideProps<TextProps>;
    DotsThreeOutlineVertical?: PrimitiveOverrideProps<ViewProps>;
    "Frame 123594450"?: PrimitiveOverrideProps<ViewProps>;
    Title594408?: PrimitiveOverrideProps<TextProps>;
    "Frame 123594467"?: PrimitiveOverrideProps<ViewProps>;
    Check594498?: PrimitiveOverrideProps<ViewProps>;
    Title594468?: PrimitiveOverrideProps<TextProps>;
    "Frame 123594471"?: PrimitiveOverrideProps<ViewProps>;
    Title594472?: PrimitiveOverrideProps<TextProps>;
    "Frame 124"?: PrimitiveOverrideProps<ViewProps>;
    Check594502?: PrimitiveOverrideProps<ViewProps>;
    Title594475?: PrimitiveOverrideProps<TextProps>;
    "Frame 123594477"?: PrimitiveOverrideProps<ViewProps>;
    Title594478?: PrimitiveOverrideProps<TextProps>;
    DotsSix594482?: PrimitiveOverrideProps<ViewProps>;
    DotsSix594485?: PrimitiveOverrideProps<ViewProps>;
    DotsSix594488?: PrimitiveOverrideProps<ViewProps>;
    DotsSix594491?: PrimitiveOverrideProps<ViewProps>;
    DotsSix594494?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TasksListProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TasksListOverridesProps | undefined | null;
}>;
export default function TasksList(props: TasksListProps): React.ReactElement;
