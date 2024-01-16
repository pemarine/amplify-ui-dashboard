/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BGBGProps } from "./BGBG";
import { IconsMoreHorizontalProps } from "./IconsMoreHorizontal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ElementsUserPhotoProps } from "./ElementsUserPhoto";
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
export declare type ElementsUserBGOverridesProps = {
    ElementsUserBG?: PrimitiveOverrideProps<ViewProps>;
    BG?: BGBGProps;
    Icon?: IconsMoreHorizontalProps;
    User?: PrimitiveOverrideProps<ViewProps>;
    Countries?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Photo?: ElementsUserPhotoProps;
} & EscapeHatchProps;
export declare type ElementsUserBGProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ElementsUserBGOverridesProps | undefined | null;
}>;
export default function ElementsUserBG(props: ElementsUserBGProps): React.ReactElement;
