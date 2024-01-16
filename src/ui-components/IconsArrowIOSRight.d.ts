/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps } from "@aws-amplify/ui-react";
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
export declare type IconsArrowIOSRightOverridesProps = {
    IconsArrowIOSRight?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconsArrowIOSRightProps = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: IconsArrowIOSRightOverridesProps | undefined | null;
}>;
export default function IconsArrowIOSRight(props: IconsArrowIOSRightProps): React.ReactElement;
